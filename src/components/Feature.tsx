"use client";
import { useEffect, useRef, useCallback, ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  //  Memoize the function so it doesn’t change every render
  const updateMousePosition = useCallback((e: MouseEvent) => {
    if (!borderRef.current) return;
    const borderRect = borderRef.current.getBoundingClientRect();
    offsetX.set(e.x - borderRect.x);
    offsetY.set(e.y - borderRect.y);
  }, [offsetX, offsetY]);

  useEffect(() => {
    if (typeof window === "undefined") return; //  Guard for SSR

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [updateMousePosition]);

  return (
    <div className="relative border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1">
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{ maskImage }}
      />
      <div className="inline-flex size-14 bg-white text-black justify-center items-center rounded-lg">
        {icon}
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70 whitespace-pre-line">{description}</p>
    </div>
  );
};
