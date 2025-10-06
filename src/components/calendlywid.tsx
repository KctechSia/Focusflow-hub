"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: any;
  }
}

export const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/obiekwekosi32/clarity-session",
          text: "Book a Free Clarity Call",
          color: "#fbbf24",
          textColor: "#ffffff",
          branding: false,
        });
      }
    };
  }, []);

  return null; // It renders nothing visible
};
