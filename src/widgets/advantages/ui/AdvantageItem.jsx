export const AdvantageItem = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center gap-y-2 text-center">
      <img
        src={icon}
        alt="icon"
        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2"
        loading="lazy"
      />
      <span className="text-sm md:text-base lg:text-lg lg:font-medium">
        {text}
      </span>
    </div>
  );
};
