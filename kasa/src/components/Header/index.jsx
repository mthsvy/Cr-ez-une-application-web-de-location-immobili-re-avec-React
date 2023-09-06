import logoKasa from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useState, useEffect } from "react";

// Créez un composant Header.
function Header() {
  // Utilisez le hook useState pour gérer l'état de la détection de la version mobile.
  const [isMobile, setIsMobile] = useState(false);

  // Initialisez les libellés des liens de navigation.
  let accueil = "Accueil";
  let a_propos = "À Propos";

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

  // Si la version est mobile, convertissez les libellés des liens en majuscules.
  if (isMobile) {
    accueil = accueil.toUpperCase();
    a_propos = a_propos.toUpperCase();
  }

  // Rendu du composant Header.
  return (
    <div className="header main_body">
      <img src={logoKasa} alt="logo kasa" />
      <nav className="header_link">
        {/* Utilisez le composant Link pour créer des liens de navigation */}
        <Link to="/">{accueil}</Link>
        <Link to="/a-propos">{a_propos}</Link>
      </nav>
    </div>
  );
}

export default Header;
