import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./App";
import { preloadRoute } from "./pages/registry";
import "./styles/index.css";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Load the current page's code first so hydration matches the prerendered HTML exactly.
// Prerendered pages hydrate; the dev server (empty root) renders from scratch.
preloadRoute(window.location.pathname)
  .catch(() => undefined)
  .then(() => {
    if (container.firstElementChild) hydrateRoot(container, app);
    else createRoot(container).render(app);
  });
