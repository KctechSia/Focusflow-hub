"use client";
import { motion, AnimatePresence } from "framer-motion";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";

export const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="py-7 border-b border-white/30">
    <button
      className="flex w-full items-center justify-between text-left cursor-pointer focus:outline-none"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`answer-${question}`}
    >
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon /> : <PlusIcon />}
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`answer-${question}`}
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-white/70 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
