import logoKasa from "../../assets/LOGO.png";
import "../../styles/components/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img src={logoKasa} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
