import { Link } from "react-router-dom";

function Header() {
    return (
    <header className="header">
      <Link to="/">
        <i className="fa-solid fa-laptop-code"></i>

        <h1 className="header__text">Gestor de proyectos</h1>
        </Link>
    </header>
    )
}

export default Header;