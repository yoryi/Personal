import React from 'react';
import { Link } from "react-router-dom";

//svg
import nombre from './../assets/nombre.svg';
import permisos from './../assets/permisos.svg';
import Bibliografia from './../assets/bibliografia.svg';

//imagenes png
import perfil from './../assets/perfil.png';

//ilustracion moderna
import ilustracion_moderna from './../assets/ilustracion_moderna.svg';
import ilustracion_moderna_2 from './../assets/ilustracion2.svg';

//css
import './css/inicio.css';

function App() {
  return (

    <div style={{ width: '100%', height: '100vh' }}>

      {/* inicio */}
      <div class="col" style={{ width: '100%', height: '100%', textAlign: 'end' }}>

        <nav class="navbar navbar-expand-lg navbar-light bg-transparent" style={{ paddingLeft: '4%', paddingRight: '2%', }}>
          <Link class="navbar-brand" style={{ fontFamily: 'helvetica-bold', fontSize: '24px' }} to="/ ">Developer</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link animated slideInRight slow" style={{ color: 'white', textAlign: 'center', paddingRight: '25px', fontFamily: 'helvetica-light' }} to="/">Home</Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link animated slideInRight slow" style={{ color: 'white', textAlign: 'center', paddingRight: '25px', fontFamily: 'helvetica-light' }} to="/Bibliografy">Bibliografy</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link animated slideInRight slow" style={{ color: 'white', textAlign: 'center', paddingRight: '25px', fontFamily: 'helvetica-light' }} to="/Contact">Contact</Link>
              </li>
            </ul>

          </div>
        </nav>

        <img src={ilustracion_moderna} style={{ width: '50%', marginTop: '-43%', marginRight: '-1.1%' }} alt="logo" />

        <div class="row" style={{ textAlign: 'center', flexDirection: 'row', height: '60vh', alignContent: 'center', marginTop: '-20%' }}>
          <div class="col">
            <img src={perfil} class="animated fadeInDown slow" style={{ width: '15%', paddingTop: '0%', paddingBottom: '0%', }} alt="logo" />
            <div class="col">
              <img src={nombre} class="animated fadeInDown slow" style={{ width: '22%', marginTop: '2%', }} alt="logo" />
            </div>
          </div>
          <div>

          </div>
        </div>



      </div>

      {/*  slider del inicio */}
      <div style={{ width: '100%', height: '100vh', }}>

        <div class="col-lg-12" style={{ height: '100%', width: '100%', textAlign: 'left', }}>
          <img src={ilustracion_moderna_2} style={{ width: '40%', marginTop: '-52%', marginLeft: '-9%' }} alt="logo" />
          <img src={Bibliografia} class="animated fadeInDown slow" style={{ width: '40%', marginTop: '-2%', marginLeft: '0%' }} alt="logo" />
        </div>


      </div>
      <div class="col" style={{ width: '100%', height: '27%', backgroundColor: 'black', marginTop: '0%', textAlign: 'center' }}>
        <img src={permisos} style={{ width: '25%', marginTop: '7%' }} alt="logo" />
      </div>
    </div>
  );
}

export default App;
