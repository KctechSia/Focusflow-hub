"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import helixImage from "@/assets/images/helix2.png";
import emojiStarImage from "@/assets/images/emojistar.png";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="bg-black text-white py-[72px] md:py-24 text-center">
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY
          }}
        >
          <Image src={helixImage} alt="" className="absolute top-6 left-[calc(100%+36px)]" />
        </motion.div>
        <motion.div
          style={{
            translateY
          }}
        >
          <Image src={emojiStarImage} alt="" className="absolute -top-[120px] right-[calc(100%+24px)]" />
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">Get instant access</h2>
        <p className="text-xl text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto md:flex-row">
          <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] md:flex-1" />
          <button type="submit" className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
      </div>
    </section>
  );
};
