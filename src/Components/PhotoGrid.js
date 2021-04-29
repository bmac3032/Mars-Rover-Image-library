import React, { useState, useEffect } from "react";
import data from "../data/photos";

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    setPhotos(data.photos);
  }, []);
  console.log(photos);
  return (
    <div>
      {photos.map((p) => {
        return <img src={p.img_src}></img>;
      })}
    </div>
  );
};

export default PhotoGrid;
