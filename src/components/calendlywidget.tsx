"use client";
import React, { useRef } from "react";
import { PopupButton } from "react-calendly";

export const CalendlyWidget = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={modalRef}>
      <PopupButton
        url="https://calendly.com/obiekwekosi32/clarity-session"
        /*
          👇 This fixes the “rootElement undefined” error
          It tells Calendly where to attach the popup modal
        */
        rootElement={document.getElementById("root")!}
        text="Book a Clarity Call"
        pageSettings={{
          backgroundColor: 'ffffff',
          primaryColor: 'fbbf24',
          textColor: '000000',
        }}
      />
    </div>
  );
};
