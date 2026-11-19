// Random order for product lists, so every visit shows a fresh mix instead of
// always the most recently added watches first.
//
// Products that have a photo are shuffled and placed before products that don't,
// so placeholder (no-photo) cards never crowd the top of a list.

const hasPhoto = (item) => Boolean(item?.images?.[0]?.url || (typeof item?.image === "string" && item.image));

// Fisher-Yates shuffle (returns a new array, input is not modified)
const shuffleArray = (list) => {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const shuffleProducts = (list) => {
  if (!Array.isArray(list)) return [];
  const withPhoto = list.filter(hasPhoto);
  const withoutPhoto = list.filter((item) => !hasPhoto(item));
  return [...shuffleArray(withPhoto), ...shuffleArray(withoutPhoto)];
};

export default shuffleProducts;
