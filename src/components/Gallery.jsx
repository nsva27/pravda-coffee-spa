import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import photos from "../data/gallery.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export const Gallery = () => {
  const [viewer, setViewer] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("50vh");
  const [isClosing, setIsClosing] = useState(false);
  const contentRef = useRef(null);

  const viewImage = (photo, index) => {
    setViewer({src:photo.src, alt:photo.alt, index});
  };
  
  const toggleExpand = () => {
    if (!expanded) {
      const fullHeight = contentRef.current.scrollHeight;
      setHeight(fullHeight + "px");
    } else {
      setHeight("50vh");
    }
    setExpanded(prev => !prev);
  };

  // Set smooth transition for carousel closing
  const closeViewer = () => {
    setIsClosing(true);
    setTimeout(() => {
      setViewer(null);
      setIsClosing(false);
    }, 400)
  };

    // Close carousel by ESC
    useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === "Escape") {
          closeViewer();
        }
      };
      window.addEventListener('keydown', handleEsc);  
      return () => {
        window.removeEventListener('keydown', handleEsc);
      }
    }, []);

  // Scroll is forbidden, when image is open
  useEffect(() => {
    if (viewer !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [viewer]);

  return (
    <>
      {/* Full size image by click */}
      {viewer && 
        <div className={`
          w-[100vw] h-[100vh] flex justify-center items-center
          fixed z-100 inset-0 bg-[#161616]/95 backdrop-blur-md
          transition-opacity duration-400
          ${isClosing  ? "opacity-0" : "opacity-100"}`}
        >
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            initialSlide={viewer.index}
            navigation={{
              prevEl: ".view-prev",
              nextEl: ".view-next"
            }}
            speed={700}
            loop={true}
            className="max-w-[60vw] max-h-[80vh] inset-0 top-3"
          >
            {photos.map((photo, index) => (
              <SwiperSlide
                key={index}
              >
                <img 
                  src={photo.src}
                  className="max-h-[100%] max-w-[80%] object-fill mx-auto rounded-xl"
                />
              </SwiperSlide>
            ))} top
          </Swiper>
          {/* Custom buttons for scrolling */}
          <button 
            className="
              view-prev w-[20vw] h-[100vh]
              flex items-center justify-end
              absolute left-0 z-110
              cursor-pointer group"
          >
            <div className="w-[70px] h-[70px] relative right-0">
              <span 
                className={`
                  w-10 h-1 absolute top-5 left-3
                  bg-gray-100 -rotate-45 rounded
                  group-hover:w-14 group-hover:top-3 group-hover:bg-amber-500 transition-all duration-500`}
              >
              </span>
              <span 
                className={`
                  w-10 h-1 absolute bottom-5 left-3
                  bg-gray-100 rotate-45 rounded
                  group-hover:w-14 group-hover:bottom-4 group-hover:bg-amber-500 transition-all duration-500`}
              >
              </span>
            </div>
          </button>
          <button 
            className="
              view-next w-[20vw] h-[100vh]
              flex items-center justify-start
              absolute right-0 z-110
              cursor-pointer group"
          >
            <div className="w-[70px] h-[70px] relative">
              <span 
                className={`
                  w-10 h-1 absolute bottom-5 right-3
                  bg-gray-100 -rotate-45 rounded
                  group-hover:w-14 group-hover:bottom-4 group-hover:bg-amber-500 transition-all duration-500`}
              >
              </span>
              <span 
                className={`
                  w-10 h-1 absolute top-5 right-3
                  bg-gray-100 rotate-45 rounded
                  group-hover:w-14 group-hover:top-3 group-hover:bg-amber-500 transition-all duration-500`}
              >
              </span>
            </div>
          </button>
        </div>  
      }

      <h2 className="mt-10 mb-5 text-lg lg:text-2xl text-[#161616] text-center font-extrabold uppercase">Галерея</h2>
      {/* Gallery container */}
      <div className="relative z-1">
        <div
          ref={contentRef}
          style={{height}} 
          className="
            mb-10 pt-5 pb-5 overflow-hidden shadow-lg/10 
            transition-all ease-in-out duration-700"
        >
          <div className="px-2 md:px-4 columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-4 ">
            {photos.map((photo, index) => (
              <div key={index} className="mb-2 sm:mb-4 break-inside-avoid">
                <img  
                  src={photo.src}
                  alt={photo.alt || ""}
                  className="
                    w-full object-cover rounded-2xl lg:cursor-pointer
                    transform transition-transform ease-in-out duration-300 hover:scale-105"
                  onClick={() => viewImage(photo, index)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Button to open all photos */}
        <button
          onClick={toggleExpand}
          className="
            w-[70px] h-[70px] mx-auto flex items-center justify-center
            absolute left-0 right-0 bottom-[-40px] z-10
            rounded-full animate-bounce cursor-pointer bg-amber-500 shadow-lg/70 shadow-amber-500/50"
        >
          {/* Arrow container */}
          <div className="relative w-8 h-6">
            <span
              className={`
                absolute left-0 top-1/2 w-5 h-1
                bg-gray-100 rounded transition-[rotate] duration-500
                ${expanded ? "-rotate-45" : "rotate-45"}`}
            >
            </span>
            <span 
              className={`
                absolute right-0 top-1/2 w-5 h-1
                bg-gray-100 rounded transition-[rotate] duration-500
                ${expanded ? "rotate-45" : "-rotate-45"}`}
            >
            </span>
          </div>
        </button>
      </div>
    </>
  )
}

// Текущие задачи:
// *
// Изменить анимацию кнопки (float)
// Сделать менее явную тень под открытой галереей
// Адаптировать галерею под телефоны и планшеты
// Настроить высоту ткрытого контейнера галереи
// ***
// Нумерация слайдов сверху фотографии
// Стрелка "назад" для выхода

// Что узнал сегодня? (05.12.25)
// Хук useRef() - что это и для чего.