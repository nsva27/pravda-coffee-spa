import { useState, useRef } from "react";

import { ExpandButton } from "@/shared/expandButton";
// import clsx from "clsx";

export const GalleryGrid = ({ viewPhoto, data }) => {
  const { photos } = data();

  const [height, setHeight] = useState("50vh");
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const expandBtnRef = useRef(null);

  // Expand fullsized gallery container
  const toggleExpand = () => {
    if (!expanded) {
      const fullHeight = contentRef.current.scrollHeight;
      setHeight(fullHeight + "px");
    } else {
      setHeight("50vh");
    }
    setExpanded((prev) => !prev);
  };

  // Expand button position
  const setBtnPosition = () => {};

  return (
    <div>
      <div
        ref={contentRef}
        style={{ height }}
        className="
          pt-5 pb-5
          overflow-hidden shadow-lg/15 rounded-b-2xl
          transition-all ease-in-out duration-1000"
      >
        <div className="px-2 md:px-4 columns-2 gap-2 sm:columns-3 sm:gap-4 lg:columns-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="
                mb-2 sm:mb-4 relative 
                rounded-xl lg:cursor-pointer
                group overflow-hidden"
              onClick={() => viewPhoto(photo, index)}
            >
              {/* Dark overlay */}
              <span
                className="
                  absolute inset-0 z-10
                  bg-black/20 group-hover:opacity-0
                  transition-opacity duration-500 pointer-events-none"
              />
              <img
                src={photo.src}
                alt={photo.alt || ""}
                className="
                  w-full
                  object-cover group-hover:scale-110
                  transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button for expanding of gallery container */}
      <ExpandButton
        ref={expandBtnRef}
        expanded={expanded}
        onToggle={toggleExpand}
      />
    </div>
  );
};
