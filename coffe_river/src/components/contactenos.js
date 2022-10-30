import contactanos from '../styles/contactenos.module.css'

function Contactenos(){
    return(
        <div class="row">
            <h1 className='h1'>Contactenos</h1>
            <div class="col-md-6">
           
            <br/>
           
            <label for="exampleInputEmail1">Nombre completo</label>
            <input type="name" class="form-control" id="exampleInputEmail1"  placeholder="Ingrese su nombre completo"></input>
           
            <br/>
           
            <label for="exampleInputEmail1">Ingrese su correo</label>
            <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="ejemplo@email.com"></input>
           
            <br/>
           
            <label for="exampleInputEmail1">Ingrese su celular</label>
            <input type="tel" class="form-control" id="exampleInputEmail1"  placeholder="(+57) 301 000 0000"></input>
           
            <br/>
           
           <label for="exampleInputEmail1">Direccion de residencia</label>
           <input type="street-address" class="form-control" id="exampleInputEmail1"  placeholder="Direccion de residencia"></input>
           
           <br/>
           
           <button type="submit" class="btn btn-primary" id='botonenviarformulario'>Enviar</button>
           
            </div>
            <div class="col-md-6">
            <img className={contactanos.imageninicio} src="./Assets/Background/imgFormulario.png" alt="imgFormulario" />
            </div>
        </div>
    );

}
export default Contactenos;