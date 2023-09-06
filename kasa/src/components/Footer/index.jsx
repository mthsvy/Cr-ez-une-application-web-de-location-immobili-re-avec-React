import logoKasa from "../../assets/LOGO.png";
import "./Footer.scss";

// Importez les hooks useState et useEffect de React.
import { useState, useEffect } from "react";

// Créez un composant Footer.
function Footer() {
  // Utilisez le hook useState pour gérer l'état de la détection de la version mobile.
  const [isMobile, setIsMobile] = useState(false);

  // Initialisez une variable "copyright" vide.
  let copyright = "";

  // Créez une fonction "handleResize" pour gérer les redimensionnements de la fenêtre.
  const handleResize = () => {
    // Vérifiez la largeur de la fenêtre pour détecter la version mobile.
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Utilisez le hook useEffect pour ajouter un gestionnaire d'événement lors du chargement du composant.
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // Configurez le texte du copyright en fonction de la version mobile ou non.
  if (isMobile) {
    copyright = (
      <p>
        © 2020 Kasa. All
        <br /> rights reserved
      </p>
    );
  } else {
    copyright = <p>© 2020 Kasa. All rights reserved</p>;
  }

  // Rendu du composant Footer.
  return (
    <footer>
      <img src={logoKasa} alt="logo kasa" />
      {copyright}
    </footer>
  );
}

export default Footer;
