import footerStyles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={footerStyles.Footer}>
      <br />

      <nav>
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-6">
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
          <div class="col-md-2">
            <br />
            <img className={footerStyles.LogoFooter} src="./Assets/Logo/LogoMenuWhite.png" />
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Footer;
