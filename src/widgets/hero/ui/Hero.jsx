import { slidesData } from "../model/slidesData";
import { useHeroSlider } from "../model/useHeroSlider";

export const Hero = () => {
  const { index } = useHeroSlider(slidesData);

  return (
    <section
      className="
        w-screen h-screen
        flex justify-center"
    >
      {/* Backgrounds */}
      {slidesData.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt=""
          className="
            absolute inset-0 z-1
            w-full h-full
            object-cover
            transition-opacity duration-1000"
          style={{
            opacity: i === index ? 1 : 0,
            position: slide.position,
          }}
        />
      ))}

      {/* Overlay */}
      <div
        className="
          absolute z-2
          w-full h-screen
          bg-black/65"
      ></div>

      {/* Content wrapper */}
      <div
        className="
        relative z-2
        h-full max-w-xl"
      >
        {/* Content */}
        <div
          className="
            h-full w-full
            flex flex-col justify-around items-center"
        >
          {/* Title wrapper */}
          <div
            className="
              relative
              min-h-64 w-60"
          >
            {slidesData.map((slide, i) => {
              const parts = slide.text.split("Правда");

              return (
                <h1
                  key={i}
                  className="
                    absolute
                    text-4xl md:text-5xl lg:text-6xl/18 text-center text-amber-50
                    font-extrabold uppercase select-none             
                    transition-opacity duration-1000"
                  style={{ opacity: i === index ? 1 : 0 }}
                >
                  {parts[0]}
                  {parts.length > 1 && (
                    <span className="text-[#EC9F3B] uppercase">Правда</span>
                  )}
                  {parts[1]}
                </h1>
              );
            })}
          </div>

          {/* Learn more button */}
          <a
            href="/"
            className="
              px-6 py-4
              bg-[#EC9F3B] hover:bg-amber-500 rounded-full
              text-xl text-amber-50
              font-semibold uppercase lg:tracking-wide
              transition-all duration-500"
          >
            Подробнее
          </a>
        </div>
      </div>
    </section>
  );
};
