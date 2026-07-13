import clsx from "clsx";

export const ExpandButton = ({ expanded, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={clsx(
        `
        w-14 h-14 md:w-16 md:h-16
        flex justify-center items-center
        sticky left-1/2 z-20 -translate-x-1/2
        rounded-full animate-bounce cursor-pointer outline-none
        transition-all duration-1000 delay-100`,
        expanded
          ? `
          bg-amber-500/75 
          hover:bg-amber-500
          bottom-3
          translate-x-[40vw]`
          : `
          hover:bg-amber-500/10
          -bottom-20
          translate-y-4`,
      )}
    >
      <div className="relative">
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span
            className={clsx(
              `
              w-6 h-1 block
              -translate-x-[7.1px]
              rounded-full transition-all duration-500`,
              expanded ? "-rotate-45 bg-gray-100" : "rotate-45 bg-amber-500",
            )}
          />
        </span>

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span
            className={clsx(
              `
              w-6 h-1 block
              translate-x-[7.1px]
              rounded-full transition-all duration-500`,
              expanded ? "rotate-45 bg-gray-100" : "-rotate-45 bg-amber-500",
            )}
          />
        </span>
      </div>
    </button>
  );
};
