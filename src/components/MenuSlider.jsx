import { MenuCard } from "./MenuCard";
import { useState } from "react";

export const MenuSlider = ({data}) => {
  const [index, setIndex] = useState(0);

  const prevCard = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
  }

  const nextCard = () => {
    setIndex((prev) => (prev === data.length - 1  ? 0 : prev + 1))
  }

  const card = data[index];

  return (
    <div className="relative w-[320px] mx-auto">
      {/* Предыдущий слайд */}
      <button
        onClick={prevCard}
        className="
          flex justify-center items-center rounded-4xl border-0
          w-8 h-8 absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 ">
        <img src="src/assets/icons/arrow-left.svg" alt="prev" className="h-5" />
      </button>

      {/* Карточка товара */}
      <div className="flex">
        <MenuCard card={card} index={index} />
      </div>
      
      {/* Следующий слайд */}
      <button
        onClick={nextCard}
        className="
          flex justify-center items-center rounded-4xl border-0
          w-8 h-8 absolute right-[-20px] top-1/2 -translate-y-1/2 z-10">
        <img src="src/assets/icons/arrow-left.svg" alt="prev" className="h-5 rotate-180" />
      </button>
    </div>
  );
};