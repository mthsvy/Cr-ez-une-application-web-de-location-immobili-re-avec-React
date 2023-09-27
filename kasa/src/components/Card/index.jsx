import "./Card.scss";

import { Link } from "react-router-dom";

function Card({ cover, title, logement }) {
  return (
    <article className="card">
      <Link to={`/fiche-de-logement/${logement}`}>
        <img src={cover} alt="" />
        <span>{title}</span>
      </Link>
    </article>
  );
}

export default Card;
