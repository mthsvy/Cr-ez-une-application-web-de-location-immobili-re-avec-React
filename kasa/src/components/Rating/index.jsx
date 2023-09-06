import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

// Créez un composant Rating.
function Rating({ value, max }) {
  return (
    <div className="rating">
      {/* Utilisez un tableau pour générer un ensemble d'étoiles en fonction de la valeur "max". */}
      {[...Array(parseInt(max))].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar} // Utilisez l'icône d'étoile solide.
          className={`star ${index < value ? "filled" : ""}`} // Ajoutez la classe "filled" pour les étoiles remplies.
        />
      ))}
    </div>
  );
}

export default Rating;
