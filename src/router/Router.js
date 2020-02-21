import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//componentes
import Navegacion from '../components/navegacion';
import inicio from '../components/inicio';
import Contactos from '../components/contactos';
import Bibliografia from '../components/bibliografia';


function App() {
    return (
        <Router>
            <Route path="/" exact component={inicio} />
            <Route path="/Contact" exact component={Contactos} />
            <Route path="/Bibliografy" exact component={Bibliografia} />
        </Router>

    );
}

export default App;
