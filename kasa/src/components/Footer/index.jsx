import logoKasa from "../../assets/LOGO.png";
import "./Footer.scss";
import { useState, useEffect } from "react";
function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  let copyright = "";
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
    copyright = (
      <p>
        © 2020 Kasa. All
        <br /> rights reserved
      </p>
    );
  } else {
    copyright = <p>© 2020 Kasa. All rights reserved</p>;
  }
  return (
    <footer>
      <img src={logoKasa} alt="logo kasa" />
      {copyright}
    </footer>
  );
}

export default Footer;
