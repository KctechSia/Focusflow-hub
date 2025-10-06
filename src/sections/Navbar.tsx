"use client";

import { useState } from "react";
import Image from "next/image";
import MenuIcon from "@/assets/icons/menu.svg";
import logoImage from "@/assets/images/logo.png";
import { CalendlyWidget } from "@/components/calendlywidget";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="py-4 bg-black fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative flex items-center space-x-2">
            <Image
              src={logoImage}
              alt="FocusFlow Hub logo"
              className="size-12 relative"
            />
            <span className="text-white font-semibold text-lg tracking-wide">
              FocusFlow Hub
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="border border-white border-opacity-30 size-10 inline-flex justify-center items-center rounded-lg md:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon className="text-white" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-white/60">
            <a
              href="#home"
              className="hover:text-white transition duration-300"
            >
              Home
            </a>
            <a
              href="#automation"
              className="hover:text-white transition duration-300"
            >
              Automation Suite
            </a>
            <a
              href="#results"
              className="hover:text-white transition duration-300"
            >
              Results
            </a>
            <a href="#faq" className="hover:text-white transition duration-300">
              FAQ
            </a>
            <CalendlyWidget />
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mt-3 flex flex-col space-y-3 bg-black border border-white/20 rounded-lg p-4 md:hidden">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white transition duration-300"
            >
              Home
            </a>
            <a
              href="#automation"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white transition duration-300"
            >
              Automation Suite
            </a>
            <a
              href="#results"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white transition duration-300"
            >
              Results
            </a>
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white transition duration-300"
            >
              FAQ
            </a>
            <div className="pt-2 border-t border-white/10">
              <CalendlyWidget />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
