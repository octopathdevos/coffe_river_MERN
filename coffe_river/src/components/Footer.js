import footerStyles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={footerStyles.Footer}>
      <br />

      <nav>
        <div class="row">
          
          <div className="col-md-6 offset-md-2">
            <br />
            <a className={footerStyles.Botonfooter} href="#">
              Mi Perfil
            </a>
            <a className={footerStyles.Botonfooter} href="#">
              Inicio
            </a>
            <a className={footerStyles.Botonfooter} href="#">
              Quienes Somos
            </a>
            <a className={footerStyles.Botonfooter} href="#">
              Nuestro Productos
            </a>
            <a className={footerStyles.Botonfooter} href="#">
              Contactenos
            </a>
          </div>
          <div className="col-md-2 ">
            <a>
            <img className={footerStyles.LogoFooter} src="./Assets/Logo/LogoMenuWhite.png" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Footer;
