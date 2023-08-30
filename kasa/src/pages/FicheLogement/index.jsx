import Carousel from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import "../../styles/Pages/FicheLogement.scss";
import Rating from "../../components/Rating";
function FicheLogement() {
  return (
    <div className="main_body">
      <Carousel />
      <div className="detail">
        <div>
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <p>Paris, Île-de-France</p>
          <ul>
            <li>Cozy</li>
            <li>Canal</li>
            <li>Paris 10</li>
          </ul>
        </div>
        <div className="commercial_and_rating">
          <div className="commercial">
            <div className="info">
              <p>Alexandre</p>
              <p>Dumas</p>
            </div>
            <div className="circle">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#c4c4c4" />
              </svg>
            </div>
          </div>
          <Rating />
        </div>
      </div>
      <div className="collapses">
        <Collapse
          label="Description"
          description="Vous serez à 50m Vous serez à 50mVous serez à 50mVous serez à 50mVous serez à 50mVous serez à 50mVous serez à 50mVous serez à 50m"
        />
        <Collapse label="Equipements" description="Vous serez à 50m" />
      </div>
    </div>
  );
}

export default FicheLogement;
