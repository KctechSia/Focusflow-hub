"use client";
import React, { useRef, useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export const CalendlyWidget = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  // ✅ Only run after the component is mounted in the browser
  useEffect(() => {
    setRootElement(document.getElementById("root"));
  }, []);

  // Don’t render the button until the rootElement is available
  if (!rootElement) return null;

  return (
    <div ref={modalRef}>
      <PopupButton
        url="https://calendly.com/obiekwekosi32/clarity-session"
        rootElement={rootElement}
        text="Book a Clarity Call"
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "fbbf24",
          textColor: "000000",
        }}
      />
    </div>
  );
};
