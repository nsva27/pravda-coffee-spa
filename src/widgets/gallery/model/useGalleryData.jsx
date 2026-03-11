import { useState, useEffect } from "react";

export const useGalleryData = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/api/gallery.json")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return {
    photos,
  };
};
