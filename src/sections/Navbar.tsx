import Image from "next/image";

import MenuIcon from "@/assets/icons/menu.svg";
import logoImage from "@/assets/images/logosaas.png";

export const Navbar = () => {
  return (
    <section className="py-4 bg-black">
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,214,255),rgb(41,216,255),rgb(255,253,128),rgb(248,154,191),rgb(252,214,255))] blur-md">
            </div>
            <Image src={logoImage} alt="Saas logo" className="size-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 size-10 inline-flex justify-center items-center rounded-lg md:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="text-white/60 items-center gap-6 hidden md:flex">
            <a href="#" className="hover:text-white transition duration-300">About</a>
            <a href="#" className="hover:text-white transition duration-300">Features</a>
            <a href="#" className="hover:text-white transition duration-300">Updates</a>
            <a href="#" className="hover:text-white transition duration-300">Help</a>
            <a href="#" className="hover:text-white transition duration-300">Customers</a>
            <button className="bg-white py-2 px-4 rounded-lg text-black">Get for free</button>
          </nav>
        </div>
      </div>
    </section>
  );
};
