import "./Card.scss";

import { Link } from "react-router-dom";

function Card({ cover, title, logement }) {
  return (
    <Link to={`/fiche-de-logement/${logement}`}>
      <article className="card">
        <img src={cover} alt="" />
        <span>{title}</span>
      </article>
    </Link>
  );
}

export default Card;
