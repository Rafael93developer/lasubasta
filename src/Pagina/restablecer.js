import React from 'react';
import { Input, Button, Form, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import IM1 from '../IMG/imagen1.jpg';

class Restablecer extends React.Component {
  state = {
    abrir: false
  }
  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {

    return (
      <>
        <nav class="navbar navbar-light bg-light">
          <img src={IM1} width="10%" alt="" />
        </nav>
        <div className="container">
          <br /><br />
          <h1 className="px-0">Restablecer contraseña</h1>
          <br />
          <h5>Ingrese su correo electrónico y le enviaremos un e-mail para restablecer su contraseña.</h5>
          <br />
          <Form>

            <Input type="email"
              name="email"
              placeholder="Ingresa el correo electronico"
              className="col-md-6 "
              autofocus="autofocus"
              onChange={this.handleChange}
              required />

            <br />
            <Button type="submit" onClick={this.abrirModal}>Enviar</Button>
          </Form>

          {/* Inicia el ara del Modal */}
          <Modal isOpen={this.state.abierto} size="m">
            <ModalHeader cssModule={{ 'modal-title': 'w-100 text-right' }}>
              <h4 className="  modal-title text-center col-12"> ENVIADO</h4>
            </ModalHeader>
            <ModalBody>
              <p>Hemos enviado exitosamente tus credenciales a tu correo electrónico.</p>
              <p>Revisa tu correo electrónico   (bandeja de entrada o spam) para recuperar tus accesos a nuestra aplicación.</p>
            </ModalBody>
            <center>


              <ModalFooter>
                <Link to={"/"} ><Button color="primary">Aceptar</Button></Link>
              </ModalFooter>
            </center>

          </Modal>
          {/* Termina el Area de la estrcutura Modal :D */}

        </div>
        <br /><br /><br />
        <Footer />
      </>
    )
  }
}
export default Restablecer;