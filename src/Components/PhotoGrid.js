import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import data from "../data/photos";

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    setPhotos(data.photos);
  }, []);
  console.log(photos);
  return (
<<<<<<< HEAD
    <div className="container">
      {photos.map((p) => {
        return <img src={p.img_src}></img>;
      })}
    </div>
=======
    <SRLWrapper>
      <div className="container">
        <div className="row">
          {photos.map((p) => {
            return (
              <div className="col-sm">
                <div className="card mt-2 p-2">
                  <img
                    className="card-img-top"
                    src={p.img_src}
                    alt={`Image id: ${p.id}`}
                  ></img>
                  <div className="card-body">
                    <div className="card-text">
                      <p>ID: {p.id}</p>
                      <p>Rover: {p.rover.name}</p>
                      <p>Earth Date Taken: {p.earth_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SRLWrapper>
>>>>>>> styling
  );
};

export default PhotoGrid;
