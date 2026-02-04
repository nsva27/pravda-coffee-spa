import clsx from "clsx";
import { IoChevronBackOutline } from "react-icons/io5";

export const SliderNavButton = ({ direction }) => {
  return (
    <button
      className={clsx(
        "slider-nav-btn",
        direction === "prev" && "view-prev",
        direction === "next" && "view-next",
        `
        w-[22vw] h-[30vh]
        flex items-center
        absolute z-110
        cursor-pointer group focus:outline-0 shadow-none
        ${direction === "prev" ? "left-0 justify-end" : "right-0 justify-start"}`,
      )}
    >
      {/* Arrows by react-icons*/}
      <IoChevronBackOutline
        className={clsx(
          `
          text-4xl text-gray-100 
          transition-all duration-500
          group-hover:text-amber-500 group-hover:w-14`,
          direction === "prev" ? "" : "rotate-180",
        )}
      />
      {/* My custom arrows */}
      {/* <div className="relative">
        <span
          className={clsx(
            `
            w-10 h-1 absolute
            bg-gray-100 rounded transition-all duration-500
            group-hover:bg-amber-500`,
            direction === "prev"
              ? "top-5 left-3 -rotate-45 group-hover:w-14 group-hover:top-3"
              : "bottom-5 right-3 -rotate-45 group-hover:w-14 group-hover:bottom-4",
          )}
        />
        <span
          className={clsx(
            `
            w-10 h-1 absolute
            bg-gray-100 rounded transition-all duration-500
            group-hover:bg-amber-500`,
            direction === "prev"
              ? "bottom-5 left-3 rotate-45 group-hover:w-14 group-hover:bottom-4"
              : "top-5 right-3 rotate-45 group-hover:w-14 group-hover:top-3",
          )}
        />
      </div> */}
    </button>
  );
};
