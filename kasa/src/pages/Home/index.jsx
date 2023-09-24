import img_1 from "../../assets/Image source 1.png";
import "./Home.scss";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../data/logements.json";

function Home() {
  return (
    <div className="main_body">
      <section>
        <Banner
          img={img_1}
          alt="Paysage de Rocher"
          title="Chez vous, partout et ailleurs"
        />
      </section>
      <section className="gallery">
        {logements.map((logement, index) => (
          <Card
            key={index}
            cover={logement.cover}
            title={logement.title}
            logement={logement.id}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
