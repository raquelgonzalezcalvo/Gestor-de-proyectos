import logoProject from "../../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">Ladies in Tech</p>
      <img src={logoProject} alt="Logo Adalab" className="footer__image" />
    </footer>
  );
}
export default Footer;
