import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
//Paginas
import Home from './Pagina/Home';
import Inicio from './Pagina/Usuario/Inicio';
//Inicia paginas de admnistrador
import InicioA from './Pagina/Administrador/InicioA';
import Subasta from './Pagina/Administrador/Subasta';
import Restablecer from './Pagina/restablecer';

//Terminan Paginas
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact path="/Inicio" component ={Inicio} />
      <Route exact path="/InicioA" component ={InicioA} />
      <Route exact path="/Restablecer" component ={Restablecer} />
      <Route exact path="/Subasta" component ={Subasta} />

    </Switch>
  </Router>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
