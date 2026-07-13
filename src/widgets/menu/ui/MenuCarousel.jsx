import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { MenuCard } from "@/entities/menuCard";
import { CarouselNavButton } from "@/shared/carouselNavButton";
import { ExpandButton } from "@/shared/expandButton";

import "swiper/css";
import "swiper/css/navigation";

export const MenuCarousel = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // const containerRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="max-w-300 w-full mx-auto py-6">
      {/* Carousel container */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".view-prev",
            nextEl: ".view-next",
          }}
          allowTouchMove={isMobile}
          loop={true}
          grabCursor={isMobile}
          slidesPerView={1}
          speed={250}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          className="select-none p-4!"
        >
          {/* Menu cards list */}
          {items.map((item) => (
            <SwiperSlide key={item.id} className="flex! justify-center">
              <MenuCard card={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev / next buttons */}
        <CarouselNavButton direction="prev" />
        <CarouselNavButton direction="next" />
      </div>

      {/* Expand fullsized container */}
      <ExpandButton expanded={expanded} onToggle={toggleExpand} />
    </div>
  );
};

// Разобраться с анимацией раскрытия
// Добавить стрелки для перелистывания
