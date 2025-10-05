"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import { CalendlyWidget } from "@/components/CalendlyWidget";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
 

  return (
    <section
    id="home"
    ref={sectionRef} className="relative py-[72px] md:py-24 text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] overflow-clip">
      <div className="absolute h-[375px] w-[750px] md:w-[1536px] md:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] md:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a href="#" className="border border-white/30 py-1 px-2 rounded-lg inline-flex gap-3">
            <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] bg-clip-text text-transparent">Qualify Prospects 24/7 Across Every Channel</span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-center inline-flex">
              Never Miss 
              <br /> Another Lead.
            </h1>
            <motion.div
              drag
              dragConstraints={sectionRef}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              whileTap={{ cursor: "grabbing" }}
              className="size-[200px] absolute right-[800px] top-[60px] hidden md:inline cursor-grab"
            >
              <Image src={cursorImage} alt="Cursor image" draggable="false" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={sectionRef}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              whileTap={{ cursor: "grabbing" }}
              className="size-[200px] absolute left-[800px] top-[56px] hidden md:inline cursor-grab"
            >
              <Image src={messageImage} alt="Message image" draggable="false" />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-between items-start gap-8">
         <p className="text-right text-xl mt-15 max-w-md">
         Your prospects reach out at all hours through multiple channels; website forms,
         email, LinkedIn DMs, Facebook messages, text messages.
         Missing even one means losing potential clients to competitors.
         </p>

         <p className="text-left text-xl mt-15 max-w-md">
         Our AI agent qualifies leads 24/7 across all your channels with a unified backend
         that maintains context wherever the conversation starts.
         </p>
        </div>

        <div className="flex justify-center mt-8">
          
        </div>
      </div>


    </section>
  );
};
