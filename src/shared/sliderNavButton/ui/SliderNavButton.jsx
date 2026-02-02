import clsx from "clsx";

export const SliderNavButton = ({ direction }) => {
  return (
    <button
      className={clsx(
        "slider-nav-btn",
        direction === "prev" && "view-prev",
        direction === "next" && "view-next",
        `
        w-[20vw] h-screen
        flex items-center
        absolute top-0 z-110
        cursor-pointer group
        ${direction === "prev" ? "left-0 justify-end" : "right-0 justify-start"}`,
      )}
    >
      <div className="w-17.5 h-17.5 relative">
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
      </div>
    </button>
  );
};
