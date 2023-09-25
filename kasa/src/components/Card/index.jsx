import "./Card.scss";

import { Link } from "react-router-dom";

function Card({ cover, title, logement }) {
  return (
    <Link to={`/fiche-de-logement/${logement}`}>
      <div className="card">
        <img src={cover} alt="" />
        <span>{title}</span>
      </div>
    </Link>
  );
}

export default Card;
