import "./Error404.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Créez un composant "Error404" qui représente la page d'erreur 404.
function Error404() {
  const [isMobile, setIsMobile] = useState(false);
  let sorry = "";

  // Définissez une fonction pour gérer le redimensionnement de la fenêtre.
  const handleResize = () => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Ajoutez un effet pour écouter les changements de taille de la fenêtre.
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // Affichez un message d'erreur différent en fonction de la taille de l'écran.
  if (isMobile) {
    sorry = (
      <p>
        Oups! La page que
        <br />
        vous demandez n'existe pas.
      </p>
    );
  } else {
    sorry = <p>Oups! La page que vous demandez n'existe pas.</p>;
  }

  return (
    <div className="error404">
      <span>404</span>
      {sorry}
      {/* Utilisez le composant "Link" pour permettre à l'utilisateur de revenir à la page d'accueil. */}
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error404;
