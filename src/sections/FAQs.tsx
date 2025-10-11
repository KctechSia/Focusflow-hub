"use client";
import { useState } from "react";
import { AccordionItem } from "@/components/AccordionItem";

const items = [
  {
    question: "How does the Lead Qualifying System work?",
    answer:
      "Once a lead submits a form, our AI agent follows up automatically via SMS, email, or call, qualifying them based on your business rules and updating your CRM instantly.",
  },
  {
    question: "Can I integrate it with my existing CRM?",
    answer:
      "Yes. We support integrations with HubSpot, Pipedrive, Salesforce, and custom databases via API or webhooks.",
  },
  {
    question: "Will the AI sound human when calling?",
    answer:
      "Absolutely. Our AI voice agents are trained to sound natural, empathetic, and context-aware ideal for professional consulting firms.",
  },
  {
    question: "How secure is client data?",
    answer:
      "All data is encrypted end-to-end and stored securely in compliance with GDPR and business-grade security standards.",
  },
  {
    question: "What results can I expect?",
    answer:
      "Clients typically save 10–20 hours weekly and increase qualified lead conversions by up to 3× within the first 30 days.",
  },
];

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="text-white bg-gradient-to-b from-[#5f2ca8] to-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 rounded-2xl shadow-2xl"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-tight max-w-3xl mx-auto">
          Frequently Asked Questions
        </h2>

        {/* Subtext */}
        <p className="text-center text-base sm:text-lg text-white/70 mt-4 mb-10 sm:mb-14 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about how FocusFlow Hub automates your
          client management, from integrations to performance results.
        </p>

        {/* Accordion List */}
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
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
