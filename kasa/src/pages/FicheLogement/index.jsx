import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import "./FicheLogement.scss";
import Rating from "../../components/Rating";
import { Navigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Tag from "../../components/Tag";
function FicheLogement() {
  const params = useParams();
  if (!logements[params.id]) {
    return <Navigate to="/not-found" />;
  }
  const logement = logements[params.id];
  return (
    <div className="fiche_logement main_body">
      <Carousel pictures={logement.pictures} />
      <div className="detail">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag) => (
              <li key={tag}>
                <Tag label={tag} />
              </li>
            ))}
          </ul>
        </div>
        <div className="commercial_and_rating">
          <div className="commercial">
            <div className="info">
              <p>{logement.host.name}</p>
            </div>
            <div className="circle">
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
          <Rating value={logement.rating} max="5" />
        </div>
      </div>
      <div className="collapses">
        <Collapse label="Description" description={logement.description} />
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
