import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Load analytics only when both public deployment settings are configured.
const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT?.trim();
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID?.trim();
if (analyticsEndpoint && analyticsWebsiteId) {
  try {
    const source = new URL(`${analyticsEndpoint.replace(/\/$/, "")}/umami`);
    if (source.protocol === "https:") {
      const script = document.createElement("script");
      script.defer = true;
      script.src = source.href;
      script.dataset.websiteId = analyticsWebsiteId;
      document.head.appendChild(script);
    }
  } catch { /* Invalid or missing configuration leaves analytics disabled. */ }
}
