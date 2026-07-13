import clsx from "clsx";
import { IoChevronBackOutline } from "react-icons/io5";

export const CarouselNavButton = ({ direction }) => {
  return (
    <button
      className={clsx(
        direction === "prev" && direction === "view-prev",
        direction === "next" && direction === "view-next",
        `absolute z-110 top-1/2 -translate-y-1/2
        cursor-pointer group focus:outline-0 shadow-none`,
        direction === "prev" ? "left-0" : "right-0",
      )}
    >
      {/* Arrows by react-icons*/}
      <IoChevronBackOutline
        className={clsx(
          `text-4xl text-gray-100 
          transition-all duration-500
          group-hover:text-amber-500`,
          direction === "prev" ? "" : "rotate-180",
        )}
      />
    </button>
  );
};
