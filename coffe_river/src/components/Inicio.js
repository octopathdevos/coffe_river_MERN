

function Inicio(){
    return(
        <div class="row">
        <div class="col-md-8">
          <h1 className="h1">Quienes Somos</h1>
          <p class="justify">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            <br />
            Lorem ipsum dolor sit amet, consectetuer suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum dolore
            eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent luptatum zzril delenit augue duis
            dolore te feugait nulla facilisi.
          </p>
          <button id="botonvermasquienessomos">Ver mas</button>
        </div>
        <div class="col-md-4">
          <img
            className="background/imagen-inicio.png"
            src="./Assets/background/imagen-inicio.png"
            alt="correriverinicio"
          />
        </div>
        <div class="col-md-2"></div>
      </div>
    )
}
export default Inicio