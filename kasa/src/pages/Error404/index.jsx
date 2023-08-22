import "../../styles/Pages/Error404.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Error404() {
  const [isMobile, setIsMobile] = useState(false);
  let sorry = "";

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

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
      <Link path="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error404;
