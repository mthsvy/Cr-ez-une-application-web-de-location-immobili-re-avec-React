import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Rating.scss";

function Rating({ value, max }) {
  return (
    <div className="rating">
      {[...Array(parseInt(max))].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`star ${index < value ? "filled" : ""}`}
        />
      ))}
    </div>
  );
}

export default Rating;
