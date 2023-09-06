import { useState } from "react";
import "./Animation_collapse.scss";

// Créez un composant Collapse qui accepte deux propriétés : label et description.
function Collapse({ label, description }) {
  // Utilisez le hook useState pour gérer l'état de l'ouverture/fermeture du Collapse.
  const [isOpen, setIsOpen] = useState(false);

  // Rendu du composant Collapse.
  return (
    <article className={`article ${isOpen ? "open" : ""}`}>
      <span className="item">
        <p>{label}</p>
        <span
          className={`material-symbols-outlined arrow ${isOpen ? "open" : ""}`}
          // Déclenchez la fonction setIsOpen lors du clic sur la flèche pour ouvrir/fermer le Collapse.
          onClick={() => setIsOpen(!isOpen)}
        >
          expand_less
        </span>
      </span>

      {/* Div pour afficher la description, avec une classe "description" qui peut être animée. */}
      <div className="description">
        <span>{description}</span>
      </div>
    </article>
  );
}

export default Collapse;
