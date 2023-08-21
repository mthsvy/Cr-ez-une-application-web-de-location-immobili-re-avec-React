import logoKasa from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
import "../../styles/components/Header.scss";

function Header() {
  return (
    <div className="header main_body">
      <img src={logoKasa} alt="logo kasa" />
      <nav className="header_link">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
