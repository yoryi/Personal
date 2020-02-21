import React from 'react';
import { Link } from "react-router-dom";
 
//css
import './css/inicio.css';

function App() {
  return (
    <div style={{backgroundColor: 'red', height: '50%',}}>
    <div style={{ height: '10%', }}>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent" style={{ paddingLeft: '4%', paddingRight: '2%', position: '-webkit-sticky'}}>
          <Link class="navbar-brand" style={{ fontFamily: 'helvetica-bold', fontSize: '24px' }} to="/">Developer</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link animated slideInRight slow" style={{ color: 'white', textAlign: 'center', paddingRight: '25px', fontFamily: 'helvetica-light' }} to="/Contact">Contact</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link animated slideInRight slow" style={{ color: 'white', textAlign: 'center', paddingRight: '25px', fontFamily: 'helvetica-light' }} to="/Bibliografy">Bibliografy</Link>
              </li>
            </ul>

          </div>
        </nav>
        </div>
        </div>
  );
}

export default App;
