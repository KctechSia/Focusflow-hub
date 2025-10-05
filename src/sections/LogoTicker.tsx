"use client";
//import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Briefcase, TrendingUp, Building2, UserCheck } from "lucide-react"; // icons
import React from "react";
/* import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="bg-black text-white py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Trusted by the world&apos;s most innovative teams</h2>
        <div className="flex overflow-hidden mt-9 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "0" }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-none gap-16 pr-16"
          >
            {[...images, ...images].map(({ src, alt }, index) => (
              <Image key={`${alt}-${index}`} src={src} alt={alt} className="flex-none h-8 w-auto" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; */
export const LogoTicker = () => {
  // Instead of images, define your consulting audience
  const audiences = [
    { icon: Users, label: "Solo Consultant" },
    { icon: Briefcase, label: "Boutique Agency" },
    { icon: TrendingUp, label: "Growth Consultant" },
    { icon: Building2, label: "Consulting Team" },
    { icon: UserCheck, label: "Independent Advisors" },
  ];

  return (
    <section className="bg-black text-white py-[72px] md:py-24">
      <div className="container mx-auto">
        <h2 className="text-xl text-center text-white/70">
          The consulting teams we&apos;re most beneficial to
        </h2>

        <div className="flex overflow-hidden mt-9 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "0" }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-none gap-16 pr-16"
          >
            {[...audiences, ...audiences].map(({ icon: Icon, label }, index) => (
              <div
                key={`${label}-${index}`}
                className="flex flex-col items-center text-gray-300 flex-none"
              >
                <Icon className="h-8 w-8 text-amber-400 mb-2" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};