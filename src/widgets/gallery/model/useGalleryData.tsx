import { useState, useEffect } from "react";

import type { GalleryPhotoData } from "@/entities/galleryPhoto";

export const useGalleryData = () => {
  const [photos, setPhotos] = useState<GalleryPhotoData[]>([]);

  useEffect(() => {
    fetch("/api/gallery.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return {
    photos,
  };
};
