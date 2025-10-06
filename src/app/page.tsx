"use client";


import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { FAQs } from "@/sections/FAQs";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <Footer />
    </>
  );
}
