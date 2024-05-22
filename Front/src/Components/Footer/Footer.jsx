
import './Footer.css';
import logo from '../../assets/logoFooter.png';
import icoface from "../../assets/iconos/ico-facebook.png"
import icoinsta from "../../assets/iconos/ico-instagram.png"
import icotiktok from "../../assets/iconos/ico-tiktok.png"
import icowpp from "../../assets/iconos/ico-whatsapp.png"

const Footer = () => {
const currentYear = new Date().getFullYear();


return (

  <footer className="footer">
  <div className="container">
    <div className="footer-content">
      <img src={logo} alt="Logo de la empresa" className="footer-logo" />
      <p className="footer-copyright">
        &copy; {currentYear} Nombre de la empresa. Todos los derechos reservados.
      </p>
      <div className="footer-social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icoface} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icoinsta} alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icotiktok} alt="TikTok" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={icowpp} alt="WhatsApp" />
        </a>
      </div>
    </div>
  </div>
</footer>
);
};
export default Footer;