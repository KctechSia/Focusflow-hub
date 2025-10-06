"use client";
import { motion } from "framer-motion";
import { Users, Briefcase, TrendingUp, Building2, UserCheck } from "lucide-react";

export const LogoTicker = () => {
  const audiences = [
    { icon: Users, label: "Solo Consultant" },
    { icon: Briefcase, label: "Boutique Agency" },
    { icon: TrendingUp, label: "Growth Consultant" },
    { icon: Building2, label: "Consulting Team" },
    { icon: UserCheck, label: "Independent Advisors" },
  ];

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* 🔸 Optional top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-400/0 via-amber-400/50 to-amber-400/0" />

      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-base sm:text-lg md:text-xl text-center text-white/70 font-medium">
          The consulting teams we&apos;re most beneficial to
        </h2>

        <div className="group flex overflow-hidden mt-9 
                        [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            initial={{ translateX: "0%" }}
            animate={{ translateX: "-33.333%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-none gap-6 sm:gap-10 md:gap-16 pr-8 md:pr-16 
                       group-hover:[animation-play-state:paused]"
          >
            {[...audiences, ...audiences, ...audiences].map(
              ({ icon: Icon, label }, index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex flex-col items-center flex-none text-gray-300"
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-amber-400 mb-2" />
                  <span className="text-xs sm:text-sm md:text-base">{label}</span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
