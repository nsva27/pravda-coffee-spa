import { useEffect, useState } from "react";
import clsx from "clsx";

export const GalleryPhoto = ({ src, alt, resetKey }) => {
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    setIsScaled(false);
  }, [resetKey]);

  const zoomPhoto = () => {
    setIsScaled((prev) => !prev);
  };

  return (
    <div
      className="
        w-full h-full
        flex justify-center items-center overflow-hidden"
    >
      <img
        src={src}
        alt={alt}
        className={clsx(
          `
          max-w-full max-h-full
          object-contain rounded-2xl transition-all duration-400`,
          !isScaled ? "scale-100 cursor-zoom-in" : "scale-170 cursor-zoom-out",
        )}
        onClick={zoomPhoto}
      />
    </div>
  );
};
