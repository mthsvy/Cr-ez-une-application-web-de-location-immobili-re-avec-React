import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import "./FicheLogement.scss";
import Rating from "../../components/Rating";
import { Navigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import Tag from "../../components/Tag";
import Avatar from "../../components/Avatar";
function FicheLogement() {
  const params = useParams();
  const logement = logements.find((element) => element.id === params.id);
  if (logement === null) {
    return <Navigate to="/not-found" />;
  }
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
          <Avatar name={logement.host.name} picture={logement.host.picture} />
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
