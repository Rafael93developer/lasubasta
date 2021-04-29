import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import A from '../../IMG/imagen1.jpg';

class Menu extends React.Component {
    render() {
        return (
            <>
                <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top  container col-11 shadow">
          <Link to={"/Inicio/"}><img class="navbar-brand py-0" src={A} width="5%" alt=""/></Link> <br />
          <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav ml-auto py-0">

              <li class="nav-item">

                <NavLink to={"/Inicio"} className="nav-link py-0" style={{ textDecoration: 'none' }} activeStyle={{ fontWeight: "bold", color: "#424242" }}>
                  Inicio
                </NavLink>
              </li>
              
              
              <li class="nav-item dropdown px-0">
                <a class="nav-link dropdown-toggle py-0" href="*" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <b>Cerrar sesion</b>
                </a>
                <div class="dropdown-menu py-0" aria-labelledby="navbarDropdownMenuLink">
                  <Link to={"/"}  className="dropdown-item py-0"><b>Cerrar sesion</b></Link>
                  
                </div>
              </li>
            </ul>
          </div>
        </nav>
                

                
                </div>

            </>
        )
    }
}
export default Menu;
