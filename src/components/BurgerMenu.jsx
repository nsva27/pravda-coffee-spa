import { useState } from "react";
import { SlideMobileMenu } from "./SlideMobileMenu";

export const BurgerMenu = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        className={`sm:hidden w-6 h-4 flex flex-col justify-between cursor-pointer outline-none relative z-50`}
        onClick={() => setIsOpen(!isOpen)}>
        <span className={`w-full h-[3px] block bg-white rounded transition-all duration-300
          ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
        <span className={`w-full h-[3px] block bg-white rounded transition-all duration-300
          ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`w-full h-[3px] block bg-white rounded transition-all duration-300
          ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}></span>
      </button>

      <SlideMobileMenu isOpen={isOpen} data={data} />
    </>
  )
};