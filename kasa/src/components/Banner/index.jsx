import "./Banner.scss";

function Banner({ img, alt, title }) {
  return (
    <section className="banner">
      <img src={img} alt={alt} />
      <span>{title}</span>
    </section>
  );
}

export default Banner;
