import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/components/Rating.scss";
function Rating({ rating }) {
  const totalStars = 5;
  rating = 3;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`star ${index < rating ? "filled" : ""}`}
        />
      ))}
    </div>
  );
}

export default Rating;
