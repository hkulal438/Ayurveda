// =========================================================
// ONLINE SHOP LINK
// The Anchan online shop (separate website). Change this one
// line when the shop sub-domain goes live.
// =========================================================

export const SHOP_URL = "https://shop.anchanayurveda.com";

// Link to one product in the shop, e.g. /product/kalamegha
export const shopProductUrl = (id) => `${SHOP_URL}/product/${id}`;
