"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative py-20 md:py-24 text-white 
                 bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)]
                 overflow-clip"
    >
      {/* Background glow */}
      <div className="absolute h-[250px] w-[500px] sm:h-[375px] sm:w-[750px] md:w-[1536px] md:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] 
                      bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] 
                      bg-[radial-gradient(closest-side,#000_82%,#9560eb)]
                      top-[calc(100%-96px)] md:top-[calc(100%-120px)]" />

      <div className="container relative px-4 md:px-8">
        {/* Tagline */}
        <div className="flex items-center justify-center text-center">
          <a
            href="#"
            className="border border-white/30 py-1 px-2 rounded-lg inline-flex gap-3 text-sm sm:text-base"
          >
            <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] bg-clip-text text-transparent">
              Qualify Prospects 24/7 Across Every Channel
            </span>
          </a>
        </div>

        {/* Headline */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-center leading-tight">
              Never Miss <br className="hidden sm:block" /> Another Lead.
            </h1>

            {/* Draggable icons (desktop only) */}
            {isMounted && (
              <>
                <motion.div
                  drag
                  dragConstraints={sectionRef}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="hidden md:inline absolute right-[800px] top-[60px] w-[120px] lg:w-[200px] cursor-grab"
                >
                  <Image src={cursorImage} alt="Cursor image" draggable="false" />
                </motion.div>

                <motion.div
                  drag
                  dragConstraints={sectionRef}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
                  whileTap={{ cursor: "grabbing" }}
                  className="hidden md:inline absolute left-[800px] top-[56px] w-[120px] lg:w-[200px] cursor-grab"
                >
                  <Image src={messageImage} alt="Message image" draggable="false" />
                </motion.div>
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-10">
          <p className="text-lg sm:text-xl text-center md:text-right md:max-w-md leading-relaxed">
            Your prospects reach out at all hours through multiple channels; website forms,
            email, LinkedIn DMs, Facebook messages, text messages. Missing even one means losing
            potential clients to competitors.
          </p>

          <p className="text-lg sm:text-xl text-center md:text-left md:max-w-md leading-relaxed">
            Our AI agent qualifies leads 24/7 across all your channels with a unified backend
            that maintains context wherever the conversation starts.
          </p>
        </div>
      </div>
    </section>
  );
};
