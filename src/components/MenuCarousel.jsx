import { useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { MenuCard } from "./MenuCard";

import 'swiper/css';
import 'swiper/css/navigation';

export const MenuCarousel = ({data}) => {
  // isMobile - true если экран < 1024
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const hendleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    };
    window.addEventListener("resize", hendleResize);

    return () => window.removeEventListener("resize", hendleResize);
  }, []);

  return (
    <div className="max-w-[1200px] w-full mx-auto px-4 py-6">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        allowTouchMove={isMobile}
        loop={true}
        grabCursor={isMobile}
        slidesPerView={1}
        speed={250}
        breakpoints={{
          640: {slidesPerView: 2},
          1024: {slidesPerView: 3}
        }}
        className="select-none"
      >
        {data.map((card) => (
          <SwiperSlide key={card.id} className="py-2">
            <MenuCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Что исправить?

// Слушатель resize срабатывает только после обновления страницы.
// Стиль стрелок.