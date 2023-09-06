import React, { useState } from "react";
import "./Carousel.scss";

// Importez les images des flèches du carrousel.
import arrow_left from "../../assets/arrow_left.png";
import arrow_right from "../../assets/arrow_right.png";

// Créez un composant Carousel qui accepte une propriété pictures (un tableau d'URLs d'images).
function Carousel({ pictures }) {
  // Utilisez le hook useState pour gérer l'index de l'image actuellement affichée.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Créez une fonction handleArrowClick pour gérer le clic sur les flèches gauche et droite.
  const handleArrowClick = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    } else if (newIndex >= pictures.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  // Rendu du composant Carousel.
  return (
    <div className="carousel-container">
      {/* Affiche l'image actuelle en utilisant l'URL correspondant à l'index actuel. */}
      <img className="banner_img" src={pictures[currentIndex]} alt="Slide" />
      {/* Vérifiez s'il y a plus d'une image à afficher. */}
      {pictures.length > 1 ? (
        <div>
          {/* Affiche les flèches gauche et droite pour la navigation. */}
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
          {/* Affiche le numéro de l'image actuelle sur le nombre total d'images. */}
          <div className="pictures_numbers">
            <p>{`${currentIndex + 1} / ${pictures.length}`}</p>
          </div>
        </div>
      ) : (
        // Si une seule image est présente, affiche une div vide.
        <div></div>
      )}
    </div>
  );
}

export default Carousel;
