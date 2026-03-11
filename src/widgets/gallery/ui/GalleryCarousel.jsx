import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";

import { IoArrowBack } from "react-icons/io5";
import { GalleryPhoto } from "@/entities/galleryPhoto/ui/GalleryPhoto";
import { Container } from "@/shared/container";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./gallery.css";

export const GalleryCarousel = ({ photos, viewer, onClose }) => {
  const [resetZoomKey, setResetZoomKey] = useState(0);

  return (
    <Container className="flex flex-col gap-y-2">
      <IoArrowBack
        className="
          w-8 h-8
          absolute left-5 z-120
          transition-all duration-500
          text-gray-100 hover:text-amber-500 hover:left-3"
        onClick={onClose}
      />
      {/* Carousel */}
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        navigation={{
          prevEl: ".view-prev",
          nextEl: ".view-next",
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          type: "fraction",
          el: ".gallery-pagination",
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={1}
        spaceBetween={50}
        initialSlide={viewer.index}
        allowTouchMove={false}
        speed={800}
        loop={true}
        onSlideChange={() => {
          setResetZoomKey((prev) => (prev === 0 ? 1 : 0));
        }}
        className="w-[55vw] h-[80vh]"
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <GalleryPhoto
              src={photo.src}
              alt={photo.alt}
              resetKey={resetZoomKey}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Outside pagination block */}
      <div className="gallery-pagination text-center"></div>
    </Container>
  );
};
