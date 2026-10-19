// Normalises product photos served from Cloudinary so every upload displays the
// same way, whatever its original width/height:
//   e_trim    - cut away the empty (white/transparent) border around the watch
//   c_lpad    - make it square WITHOUT stretching or cropping, padding the
//               short side with white (at the photo's own resolution)
//   c_limit   - only ever shrink to the requested size, never enlarge, so small
//               uploads are not blown up into a pixelated image
//   f_auto    - modern format (WebP/AVIF) where the browser supports it
//   q_auto    - visually lossless compression
// Requested at 2x the displayed size so it stays sharp on retina/phone screens.
// Non-Cloudinary URLs (placeholders, local assets) are returned unchanged.

export const IMAGE_SIZES = {
  thumb: 160, // search results, cart, checkout, thumbnails
  card: 700, // product grids
  detail: 1400, // product page main image
};

export const productImage = (url, size = IMAGE_SIZES.card) => {
  if (typeof url !== "string" || !url.includes("res.cloudinary.com") || !url.includes("/image/upload/")) {
    return url;
  }

  const [base, rest] = url.split("/image/upload/");
  // Leave URLs that already carry a transformation alone
  if (/^[a-z]{1,3}_[^/]*\//.test(rest) && !/^v\d+\//.test(rest)) return url;

  const transform = `e_trim:10/c_lpad,ar_1:1,b_white/c_limit,w_${size},h_${size}/f_auto,q_auto`;
  return `${base}/image/upload/${transform}/${rest}`;
};

export default productImage;
