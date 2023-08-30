import React, { useState } from "react";
import "../../styles/components/Carousel.scss";
import arrow_left from "../../assets/arrow_left.png";
import arrow_right from "../../assets/arrow_right.png";

function Carousel() {
  const pictures = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    } else if (newIndex >= pictures.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <img className="banner_img" src={pictures[currentIndex]} alt="Slide" />
      <div className="arrows">
        <img
          src={arrow_left}
          alt="Left Arrow"
          className="arrow arrow-left"
          onClick={() => handleArrowClick(-1)}
        />
        <img
          src={arrow_right}
          alt="Right Arrow"
          className="arrow arrow-right"
          onClick={() => handleArrowClick(1)}
        />
      </div>
      <div className="pictures_numbers">
        <p>{`${currentIndex + 1} / ${pictures.length}`}</p>
      </div>
    </div>
  );
}

export default Carousel;
