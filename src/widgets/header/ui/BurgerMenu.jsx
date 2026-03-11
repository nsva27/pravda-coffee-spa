import { useState } from "react";
import { SlideMobileMenu } from "./SlideMobileMenu";

export const BurgerMenu = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="
          sm:hidden w-6 h-4
          flex flex-col justify-between 
          relative z-50
          cursor-pointer outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`w-full h-0.75 block bg-white rounded transition-all duration-300
          ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`w-full h-0.75 block bg-white rounded transition-all duration-300
          ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`w-full h-0.75 block bg-white rounded transition-all duration-300
          ${isOpen ? "-rotate-45 -translate-y-1.25" : ""}`}
        ></span>
      </button>

      <SlideMobileMenu isOpen={isOpen} data={navItems} />
    </>
  );
};
