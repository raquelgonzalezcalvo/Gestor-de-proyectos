function Footer(props) {
    return ( 
   <footer className="footer">
        <p className="footer__copy">Nombre del equipo</p>
        <img src={props.logo} alt="Logo Adalab" className="footer__image" />
    </footer>
)
}
export default Footer;