import "../../styles/components/Card.scss";
import img from "../../assets/Image source 1.png";
function Card() {
  return (
    <article className="card">
      <img src={img} alt="" />
      <span>Titre de la location</span>
    </article>
  );
}

export default Card;
