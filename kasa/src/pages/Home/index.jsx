import img_1 from "../../assets/Image source 1.png";
import "../../styles/Pages/Home.scss";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

function Home() {
  return (
    <div>
      <section>
        <Banner img={img_1} alt="Paysage de Rocher" />
      </section>
      <section className="gallery">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default Home;
