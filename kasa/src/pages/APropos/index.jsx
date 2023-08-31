import "../../styles/Pages/APropos.scss";
import img_2 from "../../assets/Image source 2.png";
import AnimationCollapse from "../../components/Collapse";
import Banner from "../../components/Banner";

function Collapse() {
  return (
    <section className="section main_body">
      <Banner img={img_2} alt="Paysage de Montagne" />
      <AnimationCollapse
        label="Flabilité"
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes.s"
      />
      <AnimationCollapse
        label="Respect"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <AnimationCollapse
        label="Service"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <AnimationCollapse
        label="Sécurité"
        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </section>
  );
}

export default Collapse;
