import { useState, useRef } from "react";

import { ExpandButton } from "./ExpandButton";

export const GalleryGrid = ({ viewPhoto, data }) => {
  const { photos } = data();

  const [height, setHeight] = useState("50vh");
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

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

  return (
    <div className="relative z-1">
      <div
        ref={contentRef}
        style={{ height }}
        className="
          mb-10 pt-5 pb-5 overflow-hidden shadow-lg/10 
          transition-all ease-in-out duration-700"
      >
        <div className="px-2 md:px-4 columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-4 ">
          {photos.map((photo, index) => (
            <div key={photo.id} className="mb-2 sm:mb-4 break-inside-avoid">
              <img
                src={photo.src}
                alt={photo.alt || ""}
                className="
                  w-full object-cover rounded-xl lg:cursor-pointer
                  transform transition-transform ease-in-out duration-300 hover:scale-105"
                onClick={() => viewPhoto(photo, index)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Button for expanding of gallery container */}
      <ExpandButton expanded={expanded} onToggle={toggleExpand} />
    </div>
  );
};
