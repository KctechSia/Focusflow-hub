"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import appScreen from "../assets/images/flowhub.png";

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <section 
    id="results"
    className="text-white py-[72px] md:py-24 bg-gradient-to-b from-black to-[#5d2ca8]">
      <div className="container">
        <h2 className="text-center text-5xl md:text-6xl font-bold tracking-tighter">Work Less, Earn More</h2>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xl text-center text-white/70 mt-5">Celebrate the joy of accomplishment with zero missed leads, instant responses, consistent qualification, and 10-20 hours saved weekly.</p>
          <motion.div
            style={{
              opacity,
              rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image
               ref={imageRef}
               src={appScreen}
               alt="Product screenshot"
               width={2400}
               height={1800}
               className="mt-20 mx-auto rounded-2xl shadow-2xl border border-white/20 w-full max-w-6xl"
/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
