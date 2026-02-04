import { useEffect, useState } from "react";
import clsx from "clsx";

import { useGalleryData } from "../model/useGalleryData";

import { SectionTitle } from "@/shared/sectionTitle";
import { GalleryGrid } from "./GalleryGrid";
import { GalleryCarousel } from "./GalleryCarousel";
import { SliderNavButton } from "@/shared/sliderNavButton";

export const Gallery = () => {
  const [viewer, setViewer] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // Get array of gallery data in photos variable
  const { photos } = useGalleryData();

  // Open image
  const viewPhoto = (photo, index) => {
    setViewer({ src: photo.src, alt: photo.alt, index });
  };

  // Scroll is forbidden, when image is open
  useEffect(() => {
    if (viewer !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [viewer]);

  // Set smooth transition for carousel closing
  const closeViewer = () => {
    setIsClosing(true);
    setTimeout(() => {
      setViewer(null);
      setIsClosing(false);
    }, 400);
  };

  // Close carousel by ESC
  useEffect(() => {
    if (!viewer) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeViewer();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [viewer]);

  return (
    <>
      {/* Open carousel by click */}
      {viewer && (
        <div
          className={clsx(
            `
            w-100vw h-100vh
            flex items-center justify-center
            fixed top-16 inset-0 z-100
            bg-[#161616]/95 backdrop-blur-md transition-opacity duration-400`,
            isClosing ? "opacity-0" : "opacity-100",
          )}
        >
          <GalleryCarousel
            photos={photos}
            viewer={viewer}
            onClose={closeViewer}
          />
          {/* Custom buttons for scrolling */}
          <SliderNavButton direction="prev" />
          <SliderNavButton direction="next" />
        </div>
      )}

      <SectionTitle>Галерея</SectionTitle>
      {/* Gallery container */}
      <GalleryGrid viewPhoto={viewPhoto} data={useGalleryData} />
    </>
  );
};

// Текущие задачи:
// *
// Изменить анимацию кнопки (float)
// Адаптировать галерею под телефоны и планшеты
// ***
// Стрелка "назад" для выхода
