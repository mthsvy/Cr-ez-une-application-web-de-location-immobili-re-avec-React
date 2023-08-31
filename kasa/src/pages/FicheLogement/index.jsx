import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import "../../styles/Pages/FicheLogement.scss";
import Rating from "../../components/Rating";
import { useParams } from "react-router-dom";
import logements from "../../data/logements.json";
function FicheLogement() {
  const params = useParams();
  const logement = logements[params.id];

  return (
    <div className="main_body">
      <Carousel pictures={logement.pictures} />
      <div className="detail">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="commercial_and_rating">
          <div className="commercial">
            <div className="info">
              <p>{logement.host.name}</p>
            </div>
            <div className="circle">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#c4c4c4" />
              </svg>
            </div>
          </div>
          <Rating value={logement.rating} max="5" />
        </div>
      </div>
      <div className="collapses">
        <Collapse label="Description" description={logement.description} />
        <Collapse label="Equipements" description={logement.equipments} />
      </div>
    </div>
  );
}

export default FicheLogement;
