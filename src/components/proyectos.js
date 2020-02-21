import React from 'react';

//svg
import etiqueta from './etiqueta.svg';
import btn from './btn.svg';
import pregunta from './pregunta.svg';
import programacion from './programacion.svg';
import diseño from './diseño.svg';
import basededatos from './basedatos.svg';
import permisos from './permisos.svg';

//imagenes png
import texto from './letras.png';
import ilustracion from './ilustracion.png';

//css
import './App.css';

function App() {
return (

<div style={{width: '100%', height: '100vh'}}>

{/* inicio */}
<div class="col" style={{width: '100%', height: '100%',}}>

<div class="row" style={{position: 'absolute', width: '100%', height: '100%',}}>
<div class="col-lg-5 cont1" style={{paddingTop: '17.4%', paddingBottom: '20%'}} >
  <img src={texto} class="animated fadeInDown slow"  style={{width: '90%', paddingLeft: '4%'}} alt="logo" />
  
  <div class="row" style={{ flexDirection: 'column', paddingLeft: '5%', paddingRight: '4%', width: '100%', height: '100%', paddingTop: '0%', backgroundColor:'transparent'}}>
  <img src={btn} class="animated fadeInDown slow"  style={{width: '75%', paddingLeft: '0%', paddingTop:'15%' ,}} alt="logo" />
  <img src={etiqueta} class="animated fadeInDown"  style={{width: '20%', marginLeft: '25%', marginTop: '0%' ,}} alt="logo" />
  </div>
</div>


<div class="col-lg-7 col-sm-12 d-none d-sm-none d-md-block" style={{ textAlign: 'end', }} >
  <img src={ilustracion}  style={{width: '100%', marginTop: '-20%', marginRight: '-2%'}} alt="logo" />
</div>
</div>

<nav class="navbar navbar-expand-lg navbar-light bg-transparent" style={{ paddingLeft: '4%' , paddingRight: '2%', }}>
  <a class="navbar-brand" style={{fontFamily:'helvetica-bold', fontSize: '24px'}}  href="#">Developer</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  
  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
    <ul class="navbar-nav">
    <li class="nav-item active">
        <a class="nav-link animated slideInRight slow" style={{color: 'white',textAlign: 'center', paddingRight: '25px', fontFamily:'helvetica-light'}} href="#">Contact<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link animated slideInRight slow" style={{color: 'white', textAlign: 'center', paddingRight: '25px', fontFamily:'helvetica-light'}}  href="#">Bibliografy</a>
    </li>
    </ul>
   
  </div>
</nav>



</div>
{/*  slider del inicio */}
<div class="col" style={{ height: '100vh', textAlign: 'center'}}>
  

  <img src={pregunta}  style={{width: '25%', marginTop: '5%', marginRight: '-2%'}} alt="logo" />


 <div class="col" style={{width: '100%', height: '80%', marginTop: '10%'}}>
 <div class="row row-cols-3">
    <div class="col animated fadeInDown slow" style={{height: '100%'}}>
    <img src={programacion}  style={{width: '65%', marginTop: '8%', marginRight: '0%'}} alt="logo" />
    </div>
    <div class="col animated fadeInDown slow">
    <img src={diseño}  style={{width: '65%', marginTop: '8%', marginRight: '0%'}} alt="logo" /> 
    </div>
    <div class="col animated fadeInDown slow">
    <img src={basededatos}  style={{width: '65%', marginTop: '8%', marginRight: '0%'}} alt="logo" />
    </div>
 </div>  
 </div> 

</div>
<div class="col" style={{width: '100%', height: '27%', backgroundColor: 'black', marginTop: '0%', textAlign: 'center'}}>
  <img src={permisos}  style={{width: '25%', marginTop: '7%'}} alt="logo" />
</div>
</div>
);
}

export default App;
