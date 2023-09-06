import "./Card.scss";

// Importez le composant de lien de react-router-dom pour la navigation.
import { Link } from "react-router-dom";

// Créez un composant Card qui accepte trois propriétés : cover, title et logement.
function Card({ cover, title, logement }) {
  return (
    // Utilisez le composant Link pour créer un lien vers la page de détails du logement.
    <Link to={`/fiche-de-logement/${logement}`}>
      {/* Créez un élément d'article avec la classe CSS "card". */}
      <article className="card">
        {/* Affiche une image de couverture avec la source (URL) fournie en tant que propriété. */}
        <img src={cover} alt="" />
        {/* Affiche un titre (texte) fourni en tant que propriété. */}
        <span>{title}</span>
      </article>
    </Link>
  );
}

export default Card;
