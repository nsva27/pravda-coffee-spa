import { slidesData } from "../model/slidesData";
import { useHeroSlider } from "../model/useHeroSlider";

export const Hero = () => {
  const { index } = useHeroSlider(slidesData);

  return (
    <section className="w-full h-screen relative">
      {/* Backgrounds */}
      {slidesData.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-10 bg-cover bg-center transition-opacity duration-1000`}
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: `${i === index ? 1 : 0}`,
          }}
        />
      ))}

      {/* Blackout + text */}
      <div className=" w-full h-screen px-4 absolute inset-0 z-20 text-center bg-black/50">
        {slidesData.map((slide, i) => {
          const parts = slide.text.split("Правда");
          return (
            <h1
              key={i}
              className="
                px-2 absolute lg:right-0 lg:top-60 lg:w-200
                font-extrabold text-6xl/18 text-amber-50 select-none uppercase
                transition-opacity duration-1000"
              style={{ opacity: i === index ? 1 : 0 }}
            >
              {parts[0]}
              <br />
              {parts.length > 1 && (
                <span className="text-[#EC9F3B] uppercase">Правда</span>
              )}
              {parts[1]}
            </h1>
          );
        })}
        {/* Learn more button */}
        <a
          href="/"
          className="
            px-4 lg:px-8 py-2 lg:py-6 w-37.5 lg:w-50 lg:hover:scale-120
            absolute bottom-25 right-75
            rounded-2xl lg:rounded-full bg-[#EC9F3B] hover:bg-amber-500 transition-all duration-500
            text-sm lg:text-xl font-semibold lg:font-bold lg:tracking-wide uppercase text-amber-50"
        >
          Подробнее
        </a>
      </div>
    </section>
  );
};
