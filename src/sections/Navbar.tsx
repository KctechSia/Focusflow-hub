"use client";

import Image from "next/image";
import MenuIcon from "@/assets/icons/menu.svg";
import logoImage from "@/assets/images/logo.png";
import { CalendlyWidget } from "@/components/calendlywidget";

export const Navbar = () => {
  

  return (
    <section className="py-4 bg-black fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative flex items-center space-x-2">
            <Image src={logoImage} alt="FocusFlow Hub logo" className="size-12 relative" />
            <span className="text-white font-semibold text-lg tracking-wide">FocusFlow Hub</span>
          </div>

          {/* Mobile menu icon */}
          <div className="border border-white border-opacity-30 size-10 inline-flex justify-center items-center rounded-lg md:hidden">
            <MenuIcon className="text-white" />
          </div>

          {/* Navigation links */}
          <nav className="text-white/60 items-center gap-6 hidden md:flex">
            <a href="#home" className="hover:text-white transition duration-300">Home</a>
            <a href="#automation" className="hover:text-white transition duration-300">Automation Suite</a>
            <a href="#results" className="hover:text-white transition duration-300">Results</a>
            <a href="#faq" className="hover:text-white transition duration-300">FAQ</a>
            <CalendlyWidget/>
          </nav>
        </div>
      </div>

     
    </section>
  );
};
