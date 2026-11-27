// Used only at build time: renders each page to plain HTML so search
// engines and SEO checkers see the full content without running JavaScript.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
