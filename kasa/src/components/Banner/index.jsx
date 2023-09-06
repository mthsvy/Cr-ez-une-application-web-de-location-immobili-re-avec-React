// Importez le fichier de style Sass pour ce composant.
import "./Banner.scss";

// Créez un composant Banner qui accepte trois propriétés : img, alt et title.
function Banner({ img, alt, title }) {
  return (
    // Renvoie un élément de section avec la classe CSS "banner".
    <section className="banner">
      {/* Affiche une image avec la source (URL) et le texte alternatif fournis en tant que propriétés. */}
      <img src={img} alt={alt} />
      {/* Affiche un titre (texte) fourni en tant que propriété. */}
      <span>{title}</span>
    </section>
  );
}

// Exportez le composant Banner pour qu'il puisse être utilisé ailleurs.
export default Banner;
