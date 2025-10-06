"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: any;
  }
}

export const CalendlyWidget = () => {
  useEffect(() => {
    // ✅ Avoid adding the script multiple times
    if (document.getElementById("calendly-widget-script")) return;

    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/obiekwekosi32/clarity-session",
          text: "Book a Free Clarity Call",
          color: "#fbbf24", // amber accent
          textColor: "#ffffff", // white text
          branding: false,
        });
      }
    };

    // ✅ Optional cleanup (in case of page transitions)
    return () => {
      const badge = document.querySelector(".calendly-badge-widget");
      if (badge) badge.remove();
    };
  }, []);

  // ✅ Nothing visible rendered directly
  return null;
};
