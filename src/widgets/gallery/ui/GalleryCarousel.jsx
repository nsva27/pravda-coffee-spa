import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Keyboard } from "swiper/modules";

import { GalleryPhoto } from "@/entities/galleryPhoto/ui/GalleryPhoto";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";

export const GalleryCarousel = ({ photos, viewer }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Keyboard, EffectFade]}
      effect={"fade"}
      navigation={{
        prevEl: ".view-prev",
        nextEl: ".view-next",
      }}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        type: "fraction",
      }}
      centeredSlides={true}
      slidesPerView={1}
      initialSlide={viewer.index}
      speed={400}
      loop={true}
      className="w-[50vw] h-[80vh] border-6 border-blue-500"
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <GalleryPhoto src={photo.src} alt={photo.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
