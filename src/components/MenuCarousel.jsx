// import { useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MenuCard } from "./MenuCard";
import 'swiper/css';
import 'swiper/css/navigation';

export const MenuCarousel = ({data}) => {
  // const [index, setIndex] = useState(0);
  // const [visibleCount, setVisibleCount] = useState(3);

  // useEffect(() => {
  //   const updateVisvibleCount = () => {
  //     if (window.innerWidth < 640) setVisibleCount(1);
  //     else if (window.innerWidth < 1024) setVisibleCount(2);
  //     else setVisibleCount(3);
  //   };

  //   updateVisvibleCount();
  //   window.addEventListener('resize', updateVisvibleCount);
  //   return () => window.removeEventListener('resize', updateVisvibleCount);
  // }, []);

  // Листание карточек
  // const prevCard = () => {
  //   setIndex((prev) => (prev === 0 ? data.length - visibleCount : prev - 1))
  // };

  // const nextCard = () => {
  //   setIndex((prev) => (prev === data.length - visibleCount  ? 0 : prev + 1))
  // };

  // const card = data[index];

  return (
    <div className="w-[1120px] mx-auto px-4">
      <Swiper
      modules={[Navigation]}
      navigation={true}
      spaceBetween={10}
      loop ={true}
      grabCursor={true}
      slidesPerView={1}
      breakpoints={{
        640: {slidesPerView: 2},
        1024: {slidesPerView: 3}
      }}
      className="py-10"
    >
      
      {data.map((card) => (
        <SwiperSlide key={card.id}>
          <MenuCard card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    // <div 
    //   className="
    //     max-w-[1120px] w-[100%] h-[450px] relative
    //     flex items-center bg-amber-200 mx-auto">
    //   {/* Предыдущий слайд */}
    //   <button
    //     onClick={prevCard}
    //     className="
    //       flex justify-center items-center rounded-4xl border-0
    //       w-8 h-8 absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 ">
    //     <img src="src/assets/icons/arrow-left.svg" alt="prev" className="h-5" />
    //   </button>

    //   {/* Карточки товара */}
    //   <MenuCard card={card} />
     
      
    //   {/* Следующий слайд */}
    //   <button
    //     onClick={nextCard}
    //     className="
    //       flex justify-center items-center rounded-4xl border-0
    //       w-8 h-8 absolute right-[-40px] top-1/2 -translate-y-1/2 z-10">
    //     <img src="src/assets/icons/arrow-left.svg" alt="prev" className="h-5 rotate-180" />
    //   </button>
    // </div>
  );
};