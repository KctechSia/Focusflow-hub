import Image from "next/image";

import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <section className="text-white py-[72px] md:py-24 bg-gradient-to-b from-black to-[#5d2ca8]">
      <div className="container">
        <h2 className="text-center text-5xl md:text-6xl font-bold tracking-tighter">Intuitive interface</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
        </div>
        <Image src={appScreen} alt="Product screenshot" className="mt-14" />
      </div>
    </section>
  );
};
