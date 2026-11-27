import { useEffect } from "react";
import { BUSINESS, SITE_URL, pageFor } from "./site.js";

// Keeps <title>, description, canonical link and share tags in step
// with the page the visitor is on.
function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export default function usePageMeta(pathname) {
  useEffect(() => {
    const p = pageFor(pathname);
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = p.title;
    setMeta("name", "description", p.description);
    setMeta("property", "og:title", p.title);
    setMeta("property", "og:description", p.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", `${SITE_URL}${BUSINESS.image}`);
    setMeta("name", "twitter:title", p.title);
    setMeta("name", "twitter:description", p.description);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [pathname]);
}
