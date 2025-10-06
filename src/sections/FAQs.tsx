"use client";
import { AccordionItem } from "@/components/AccordionItem";


const items = [
  {
    question: "How does the Lead Qualifying System work?",
    answer:
      "Once a lead submits a form, our AI agent follows up automatically via SMS, email, or call, qualifying them based on your business rules and updating your CRM instantly."
  },
  {
    question: "Can I integrate it with my existing CRM?",
    answer:
      "Yes. We support integrations with HubSpot, Pipedrive, Salesforce, and custom databases via API or webhooks."
  },
  {
    question: "Will the AI sound human when calling?",
    answer:
      "Absolutely. Our AI voice agents are trained to sound natural, empathetic, and context-aware, ideal for professional consulting firms."
  },
  {
    question: "How secure is client data?",
    answer:
      "All data is encrypted end-to-end and stored securely in compliance with GDPR and business-grade security standards."
  },
  {
    question: "What results can I expect?",
    answer:
      "Our clients typically save 10–20 hours weekly and increase qualified lead conversions by up to 3× within the first 30 days."
  }
];
import React, { useState } from "react";

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section 
    id="faq"
    className="text-white py-[72px] md:py-24 bg-gradient-to-b from-[#5f2ca8] to-black rounded-2xl shadow-2xl">
      <div className="container">
        <h2 className="text-5xl md:text-6xl lg:max-w-[648px] mx-auto text-center font-bold tracking-tighter">Frequently asked questions</h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }, idx) => (
            <AccordionItem
              key={question}
              question={question}
              answer={answer}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
