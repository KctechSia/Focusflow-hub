"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import appScreen from "../assets/images/flowhub.png";

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Enable scroll-based animation only after mount (to avoid hydration issues)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <section
      id="results"
      className="text-white bg-gradient-to-b from-black to-[#5d2ca8] py-16 sm:py-20 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Work Less, Earn More
        </h2>

        {/* Subtext */}
        <div className="max-w-3xl mx-auto mt-5">
          <p className="text-base sm:text-lg md:text-xl text-center text-white/70 leading-relaxed">
            Celebrate the joy of accomplishment with zero missed leads,
            instant responses, consistent qualification, and 10–20 hours saved
            weekly — all powered by automation that scales with you.
          </p>
        </div>

        {/* Animated Product Image */}
        {isMounted && (
          <motion.div
            ref={imageRef}
            style={{
              opacity,
              rotateX,
              transformPerspective: "800px",
            }}
            className="mt-12 sm:mt-16 md:mt-20"
          >
            <Image
              src={appScreen}
              alt="FocusFlow Hub product screenshot"
              width={2400}
              height={1800}
              priority
              className="mx-auto w-full max-w-[95%] sm:max-w-3xl md:max-w-5xl lg:max-w-6xl 
                         rounded-2xl border border-white/20 shadow-2xl"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};
