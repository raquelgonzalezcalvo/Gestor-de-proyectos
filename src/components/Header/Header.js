import { Link } from "react-router-dom";
import logoProject from "../../images/logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logoProject} alt="logo de proyecto"></img>
        {/* <i className="fa-solid fa-laptop-code"></i>

        <h1 className="header__text">Gestor de proyectos</h1> */}
      </Link>
    </header>
  );
}

export default Header;
