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
    <section className="relative bg-black text-white py-[72px] md:py-24">
      {/* optional top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-400/0 via-amber-400/50 to-amber-400/0" />

      <div className="container mx-auto">
        <h2 className="text-xl text-center text-white/70">
          The consulting teams we&apos;re most beneficial to
        </h2>

        <div className="group flex overflow-hidden mt-9 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "0%" }}
            animate={{ translateX: "-33.333%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-none gap-8 md:gap-16 pr-8 md:pr-16 group-hover:[animation-play-state:paused]"
          >
            {[...audiences, ...audiences, ...audiences].map(({ icon: Icon, label }, index) => (
              <div
                key={`${label}-${index}`}
                className="flex flex-col items-center text-gray-300 flex-none"
              >
                <Icon className="h-6 w-6 md:h-8 md:w-8 text-amber-400 mb-2" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
