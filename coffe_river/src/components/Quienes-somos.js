import quienesSomoscss from '../styles/Quienes-Somos.module.css'

function QuienesSomos() {
  return (
    <div className="container">
      <div className="row" >
        <div class="col-md-5 offset-md-2 pt-3">
            <h1 className="h1 text-start">Quienes Somos</h1>
            <p className="text-start text-justify">
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
            dolore te feugait nulla facilisiconsectetuer suscipit lobortis nisl
            facilisi. Lorem ipsum dolor sit amet, consectetuer suscipit lobortis
            nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
            dolor in hendrerit in vulputate velit esse molestie consequat, vel
            illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
            iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi.
            </p>
        </div>
        <div class="col-md-3 pt-3">
            <img
            className={quienesSomoscss.imageninicio}
            src="./Assets/Background/imagen-inicio.png"
            alt="correriverinicio"
            />
        </div>
      </div>  
      <div className="row">
        <div class="col-md-8 offset-md-2">
            <div>
            <br />
            <hr />
            </div>
            <h1 className="h1 text-start">Origen</h1>
            <p className="text-start text-justify">
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
            dolore te feugait nulla facilisiconsectetuer suscipit lobortis nisl ut
            aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse molestie consequat, vel illum dolore
            eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
            dignissim qui blandit praesent luptatum zzril delenit augue duis
            dolore te feugait nulla facilisi.
            </p>
        </div>
      </div>
      <div className="row">
        <div class="col-md-8 offset-md-2">
            <img
            className={quienesSomoscss.imagenorigenes}
            src="./Assets/Background/FondoOrigenes.png"
            alt="FondoOrigen"
            />
        </div>
      </div>  
      
      <div className="row pt-5 mb-5" >
        <div className="col-md-4 offset-md-2">
            <h1 className="h1 text-start">Nuestro Grano</h1>
            <p className="text-start text-justify">
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
        </div>
        <div className="col-md-4">
            <img   
            className={quienesSomoscss.imageninicio}
            src="./Assets/Background/NuestroGrano.png"
            alt="correriverinicio"
            />
        </div>
      </div>
    </div>
  );
}
export default QuienesSomos;
