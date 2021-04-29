import React from 'react';
import video from '../Video/Evenet_Video_V02.mp4';
import IM1 from '../IMG/IM2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Components/Styles/General.css';
import {Button, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Form } from 'reactstrap';


class ModalInicio extends React.Component {
  state = {
    modalInicio: true,
    modalInsertar: false,
    modalUser: false,
  }

  mostrarModalInicio = () => {
    this.setState({
      modalInicio: true,
    });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  MostrarModalUser = () => {
    this.setState({ modalUser: true });
  };
 CerraModalUser = () => {
    this.setState({ modalUser: false });
  };
  


  render() {

    return (
      <>
      
{/*Modales para el inicio de sesion */}
        <Modal isOpen={this.state.modalInicio} size="xl" onClick={() => this.mostrarModalInsertar()}>
          <ModalHeader className="border-0 bg-dark" cssModule={{ 'modal-title': 'w-100 text-right' }}>
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>


          <ModalBody>
            {/* <img src={IM1} width="100%" alt="" /> */}
            <video src={video} width="100%" loop controls muted autoplay="true" preload="auto" />           
          </ModalBody>
          <ModalHeader className="border-0" cssModule={{ 'modal-title': 'w-100 text-center' }}>
         
            <Button >Iniciar Sesion</Button> 
            <Button className="px-4 ml-2" onClick={this.MostrarModalUser} >Registrate</Button>
       
            
          </ModalHeader>
          
          
        </Modal>


        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader
            className="border-0"
            cssModule={{ 'modal-title': 'w-100 text-right' }}
            toggle={() => this.setState({ modalInsertar: false })}
          >
          </ModalHeader>

          <ModalHeader className="border-0" cssModule={{ 'modal-title': 'w-100 text-center' }}>
            <img  alt="Responsive image" />
            <br />
            <br />
            <h2>Bienvenido</h2>
            <h3 className="text-dark">Ingrese a su cuenta</h3>

          </ModalHeader>
          <ModalBody>
            <div className="container px-5 ">
              <Form>
                <FormGroup>
                  <label >
                    <h3 className="text-secondary">Usuario:</h3>
                  </label>
                  <div class="input-group">

                    <input
                      className="form-control"
                      name="usuario"
                      type="text"
                      required
                      onChange={this.handleChange}
                     
                    />
                    <span>
                      <div className="container">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      </div>
                    </span>
                  </div>
                </FormGroup>

                <FormGroup>
                  <label>
                    <h3 className="text-secondary">Contraseña:</h3>
                  </label>
                  <div class="input-group">

                    <input
                      className="form-control"
                      name="contrasena"
                      type="password"
                      required
                      onChange={this.handleChange}
                      
                    />
                    <span>
                      <div className="container">
                        <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                      </div>

                    </span>
                  </div>

                </FormGroup>
                <FormGroup>
                  <div classNames="container-fluid">
                    <div class="form-check">
                      <input class="form-check-input" required name="terms" type="checkbox" value="" id="defaultCheck2" />
                      <label class="form-check-label" for="defaultCheck1">
                        <a href=""><p className="h7">Aceptar aviso de privacidad</p></a>
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                      <label class="form-check-label" for="defaultCheck1">
                        <p className="h7">Recordarme</p>
                      </label>
                    </div>
                    <Link to={"/restablecer"}><p className="h7">Olvide mi contraseña</p></Link>
                  </div>
                </FormGroup>
                <ModalHeader className="border-0" cssModule={{ 'modal-title': 'w-100 text-center' }}>
                  <Button className="btn btn-info" type="submit">Iniciar sesión </Button>
                  
                  <br />
                </ModalHeader>

              </Form>
            </div>
          </ModalBody>
        </Modal>
{/* Termina el incio de sesion*/}

{/* Aqui termina la seccion de verificacion */}


        {/* Aqui empieza el modal de registro de usuario */}
        <Modal isOpen={this.state.modalUser} >
        <ModalHeader className="border-0" cssModule={{ 'modal-title': 'w-100 text-right' }} onClick={this.CerraModalUser}>
        <h1 className="text-center">Registrate aqui
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button></h1>
          </ModalHeader>
            <FormGroup>
            <Form>
          <ModalBody>

            <h4>Nombre:</h4>
            <input placeholder="Nombre" type="text" name="nombre" className=" form-control"
            required />

            <h4 className="pt-2">Nickname:</h4>
            <input placeholder="Nickname" type="text" name="nickname" className="form-control"  required />

            <h4 className="pt-2">Correo electronico</h4>
            <input placeholder="DonCheto@gmail.com" type="email" name="email" className="form-control"
             required/>

            <h4 className="pt-2">Telefono:</h4>
            <input type="tel" placeholder="55(10 digitos)" className="form-control" 
            pattern="[0-9]{10}"
            title="Telefono invalido Ingrese telefono a 10 digitos"
            required/>

            <h4 className="pt-2">Contraseña</h4>
            <input type="password" placeholder="Contraseña" className="form-control"
            pattern="[A-Za-z0-9@#$%]{8,15}"
            title="Use Caracteres especiales, Mayusculas, Minusculas, Numeros,'@', '#', '$' y '%', entre 8 y 15 digitos"
            minlength="8"
            maxlength="15"
            required/>
            
            <h4 className="pt-2">Confirmar contraseña:</h4>
            <input type="password" placeholder="Confirmar contraseña" className="form-control" required />
            
            <div class="form-check container pt-4">
                      <input class="form-check-input" required name="terms" type="checkbox" value="" id="defaultCheck2" />
                      <label class="form-check-label" for="defaultCheck1">
                        <a href=""><p className="h7">Aceptar aviso de privacidad</p></a>
                      </label>
                    </div>
          </ModalBody>
          <ModalHeader className="border-0" cssModule={{ 'modal-title': 'w-100 text-center' }}>
          {/* <Link to={"/"} className="btn btn-primary  col-6" onClick={() => this.setState({ modalregistrar: false })}>RESGISTRARME</Link> */}
            <Button type="submit" className="text-center px-4" >Registrarse</Button>
          </ModalHeader>
            </Form>
            </FormGroup>

        </Modal>
        {/* Aqui Termina el modal de registro de usuario */}
      </>
    );
  }
}

export default ModalInicio;

