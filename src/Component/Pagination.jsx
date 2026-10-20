import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ITEMS_PER_PAGE = 12;

// Page numbers to show: always first + last, plus the current page and `siblings`
// pages either side; gaps become "..." (e.g. 1 2 ... 26  /  1 ... 7 8 9 ... 26).
const getPageList = (page, totalPages, siblings) => {
  const maxPlain = siblings === 0 ? 5 : 5 + siblings * 2;
  if (totalPages <= maxPlain) return Array.from({ length: totalPages }, (_, i) => i + 1);

  const pages = new Set([1, totalPages]);
  for (let p = page - siblings; p <= page + siblings; p++) pages.add(p);
  // At either end, also show the next page in so it never looks like "1 ... 26"
  if (page === 1) pages.add(2);
  if (page === totalPages) pages.add(totalPages - 1);
  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);

  const list = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) list.push("...");
    list.push(p);
  });
  return list;
};

const baseBtn =
  "inline-flex items-center justify-center h-9 min-w-9 sm:h-11 sm:min-w-11 px-2 sm:px-3 rounded-lg text-sm font-semibold transition-all duration-200";
const idleBtn = "bg-white text-zinc-700 border border-zinc-200 shadow-sm hover:border-[#D4AF37] hover:text-black cursor-pointer";
const activeBtn = "bg-[#111827] text-white border border-[#D4AF37] shadow-md";
const disabledBtn = "bg-white text-zinc-300 border border-zinc-100 cursor-not-allowed";

const PageButtons = ({ list, page, onChange, className }) => (
  <div className={`items-center gap-1.5 sm:gap-2.5 ${className}`}>
    {list.map((p, i) =>
      p === "..." ? (
        <span key={`gap-${i}`} className="w-5 sm:w-8 text-center text-sm text-zinc-400 select-none">
          ...
        </span>
      ) : (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          aria-label={`Page ${p}`}
          aria-current={p === page ? "page" : undefined}
          className={`${baseBtn} ${p === page ? activeBtn : idleBtn}`}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {p}
        </button>
      )
    )}
  </div>
);

export const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  const go = (p) => {
    if (p >= 1 && p <= totalPages && p !== page) onChange(p);
  };

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5 sm:gap-2.5 pt-10 sm:pt-14">
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className={`${baseBtn} ${page === 1 ? disabledBtn : idleBtn}`}
      >
        <FaChevronLeft className="text-xs" />
      </button>

      {/* Phones: compact (1 ... 5 ... 26); larger screens: one neighbour each side */}
      <PageButtons list={getPageList(page, totalPages, 0)} page={page} onChange={go} className="flex sm:hidden" />
      <PageButtons list={getPageList(page, totalPages, 1)} page={page} onChange={go} className="hidden sm:flex" />

      <button
        type="button"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className={`${baseBtn} ${page === totalPages ? disabledBtn : idleBtn}`}
      >
        <FaChevronRight className="text-xs" />
      </button>
    </nav>
  );
};

/**
 * Wraps a product grid: shows `perPage` items at a time with numbered pages below.
 * Usage: <Paginated items={list}>{(pageItems) => <div className="grid">...</div>}</Paginated>
 * Goes back to page 1 whenever the list itself changes (filters, search, brand...).
 */
export const Paginated = ({ items = [], perPage = ITEMS_PER_PAGE, children }) => {
  const [page, setPage] = useState(1);
  const topRef = useRef(null);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const listKey = items.map((item) => item?._id || item?.id).join("|");

  useEffect(() => {
    setPage(1);
  }, [listKey]);

  const safePage = Math.min(page, totalPages);
  const pageItems = items.slice((safePage - 1) * perPage, safePage * perPage);

  const handleChange = (next) => {
    setPage(next);
    // Bring the top of the grid back into view
    const top = topRef.current?.getBoundingClientRect().top;
    if (top !== undefined) {
      window.scrollTo({ top: window.scrollY + top - 24, behavior: "smooth" });
    }
  };

  return (
    <div ref={topRef}>
      {children(pageItems)}
      <Pagination page={safePage} totalPages={totalPages} onChange={handleChange} />
      {totalPages > 1 && (
        <p className="pt-3 text-center text-xs text-zinc-500" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Showing {(safePage - 1) * perPage + 1}–{Math.min(safePage * perPage, items.length)} of {items.length}
        </p>
      )}
    </div>
  );
};

export default Paginated;
