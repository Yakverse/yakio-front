import YakLogo from "../assets/yaklogosemfundo.png";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={YakLogo} alt="Yak Logo" className="footer-logo" />
      <h1 className="footer-title">YakIO</h1>
    </div>
  );
};

export default Footer;
