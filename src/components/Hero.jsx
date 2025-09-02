import { useState, useEffect } from "react";

export const Hero = () => {
  const slides = [
    {
      image: '/img/bg.jpg',
      text: (
        <>
          Счастье у тебя в руках.<span className="text-[#EC9F3B] uppercase"> Правда</span>
        </> 
      ),
    },
    {
      image: '/img/bg-2.jpg',
      text: (
        <>
          <span className="text-[#EC9F3B] uppercase"> Правда</span> Вкусный кофе
        </>
      ),
    },
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000); // Менять фон каждые 10 сек

    return () => clearInterval(interval);
  }, [slides.length])

  return (
    <section className="w-full h-screen relative">
      {/* Фоны */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 z-10`}
          style={{backgroundImage: `url(${slide.image})`, opacity: `${i === index ? 1 : 0}`}} />
      ))}

      {/* Тонировка + текст */}
      <div className="absolute inset-0 w-full h-screen px-4 bg-black/50 text-center z-20">
        {slides.map((slide, i) => (
          <h1 
            key={i}
            className="absolute left-0 right-0 mx-auto mt-14 px-2 text-3xl font-extrabold text-amber-50 uppercase transition-opacity duration-1000"
            style={{opacity: i === index ? 1 : 0}}
          >
            {slide.text}
          </h1>
        ))}

        <a href="/" className="
          px-4 py-2 w-[150px] rounded-2xl bg-[#EC9F3B]
          absolute bottom-[80px] left-0 right-0 mx-auto
          text-sm semibold uppercase text-amber-50">Подробнее</a>
      </div>
    </section>
  )
}