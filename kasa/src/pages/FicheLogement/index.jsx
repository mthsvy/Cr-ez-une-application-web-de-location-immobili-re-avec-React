import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import "./FicheLogement.scss";
import Rating from "../../components/Rating";
import { Navigate, useParams } from "react-router-dom";

// Importez les données de logement depuis le fichier JSON.
import logements from "../../data/logements.json";

// Créez un composant "FicheLogement" pour afficher les détails d'un logement.
function FicheLogement() {
  // Obtenez les paramètres d'URL, notamment l'ID du logement à afficher.
  const params = useParams();

  // Vérifiez si le logement avec l'ID spécifié existe dans les données.
  if (!logements[params.id]) {
    // Si le logement n'existe pas, redirigez vers la page "not-found".
    return <Navigate to="/not-found" />;
  }

  // Obtenez les détails du logement à partir des données.
  const logement = logements[params.id];

  return (
    <div className="fiche_logement main_body">
      {/* Affichez un carrousel d'images du logement en utilisant le composant "Carousel". */}
      <Carousel pictures={logement.pictures} />

      <div className="detail">
        <div>
          {/* Affichez le titre et l'emplacement du logement. */}
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          {/* Affichez les tags du logement sous forme de liste. */}
          <ul>
            {logement.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="commercial_and_rating">
          <div className="commercial">
            <div className="info">
              {/* Affichez le nom de l'hôte du logement. */}
              <p>{logement.host.name}</p>
            </div>
            <div className="circle">
              {/* Affichez l'image de l'hôte. */}
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>

          {/* Affichez la note de ce logement en utilisant le composant "Rating". */}
          <Rating value={logement.rating} max="5" />
        </div>
      </div>

      <div className="collapses">
        {/* Affichez une section "Description" avec un composant "Collapse". */}
        <Collapse label="Description" description={logement.description} />

        {/* Affichez une section "Équipements" avec un composant "Collapse". */}
        <Collapse
          label="Equipements"
          description={logement.equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
        />
      </div>
    </div>
  );
}

export default FicheLogement;
