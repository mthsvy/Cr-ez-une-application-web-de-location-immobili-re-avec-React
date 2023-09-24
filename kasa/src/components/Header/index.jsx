import logoKasa from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useState, useEffect } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  let accueil = "Accueil";
  let a_propos = "À Propos";
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
    accueil = accueil.toUpperCase();
    a_propos = a_propos.toUpperCase();
  }
  return (
    <div className="header main_body">
      <img src={logoKasa} alt="logo kasa" />
      <nav className="header_link">
        <Link to="/">{accueil}</Link>
        <Link to="/a-propos">{a_propos}</Link>
      </nav>
    </div>
  );
}

export default Header;
