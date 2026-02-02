export const ExpandButton = ({ expanded, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="
        w-17.5 h-17.5 mx-auto flex justify-center
        absolute left-0 right-0 -bottom-10 z-10
        rounded-full animate-bounce cursor-pointer bg-amber-500 shadow-lg/70 shadow-amber-500/50"
    >
      {/* Arrow container */}
      <div className="mt-[30%] relative w-8 h-6">
        <span
          className={`
            absolute left-0 top-1/2 w-5 h-1
            bg-gray-100 rounded transition-[rotate] duration-500
            ${expanded ? "-rotate-45" : "rotate-45"}`}
        ></span>
        <span
          className={`
            absolute right-0 top-1/2 w-5 h-1
            bg-gray-100 rounded transition-[rotate] duration-500
            ${expanded ? "rotate-45" : "-rotate-45"}`}
        ></span>
      </div>
    </button>
  );
};
