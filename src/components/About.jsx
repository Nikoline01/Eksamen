import { useState, useEffect } from "react";
import miget from "/src/assets/img0002.jpg";
import migto from "/src/assets/migto.JPG";
import migtrer from "/src/assets/migtrer.JPG";
import migfire from "/src/assets/migfire.jpg";

export default function AboutItem() {
  const images = [miget, migto, migtrer, migfire];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="about">
      <h1>ABOUT</h1>
      <div className="info">
        <p>
          Hello! I am Nikoline Holm, a 3rd semester multimediadesign student at
          Business Academy Aarhus. I am passionate about my education because,
          it allows me to combine creativity with technical skills. Outside of
          my studies I love to travel and explore new places, and I enjoy
          capturing special moments through a camera. Feel free to explore my
          portfolio and browse through my previous work.
        </p>
        <div className="profile-photo">
          <img
            src={images[currentImageIndex]}
            alt={`profil-billede-${currentImageIndex + 1}`}
          />
        </div>
      </div>
    </div>
  );
}
