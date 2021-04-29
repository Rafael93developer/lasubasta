import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardDeck, Modal, ModalBody, ModalHeader, CardImg, Form, ModalFooter } from 'reactstrap';
import MenuAdmin from '../Administrador/MenuAdmin'
import prueba from '../../IMG/prueba.png'
import chat from '../../IMG/chat.png';
import A from '../../IMG/imagen1.jpg';
import video1 from '../../Video/Evenet_Video_V02.mp4';
import Footer from '../Footer';
import '../../Components/Styles/General.css';
class Subasta extends React.Component {
    state = {
        abrirModal: false,
    }
    abrirCatalogo = () => {
        this.setState({ abrirModal: !this.state.abrirModal });
    }

    render() {
        return (
            <>
                <MenuAdmin />
                <br /><br /><br />
                <div className="container">
                    <h1>Subasta</h1>
                    <br />
                    <CardDeck>
                        <Card className="border-0">
                            {/* <video src={video1} width="100%"  loop controls preload="auto" /> */}
                            <img src={prueba} alt="" />
                            <br />
                            <div className="form-inline">
                                <button className="col-5 btn btn-primary py-1" onClick={this.abrirCatalogo} >Catálogo de artículos</button>
                                <button className="ml-auto col-5 btn btn-primary py-1" disabled>Enviar producto</button>
                            </div>
                        </Card>


                        <Card>



                            <p>Aqui no se que va</p>
                        </Card>
                    </CardDeck>
                    <br /><br />
                    <Card className="col-12">
                        <p>Aca les dejo la seccion del Chat</p>
                        <img src={chat} width="100%" />

                    </Card>

                    {/* Aqui va el Apartado del Modal de catalogos */}

                    <Modal isOpen={this.state.abrirModal} size="xl">
                        <ModalHeader className="border-0" cssModule={{ 'modal-title': 'w-100 text-right' }} >
                            <h3 className="text-center">Articulos en puja
                        <button type="button" class="close" aria-label="Close" onClick={this.abrirCatalogo}>
                                    <span aria-hidden="true">&times;</span>
                                </button></h3>
                            <hr />
                        </ModalHeader>
                        <ModalBody>
                            <CardDeck>

                                <Card>

                                    <div class="form-check container pt-1">
                                        <input class="form-check-input" required name="disponible" type="checkbox" value="" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            <p>Disponible</p>
                                        </label>
                                    </div>

                                    <CardImg src={A} className="border-0 px-2" />

                                    <h3 className="text-center">Titulo de producto</h3>
                                    <CardBody>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                                    </CardBody>
                                    <h8 className="text-center">precio inicial de la puja</h8>
                                    <p className="text-center">$100.00 Mxn</p>
                                </Card>

                                <Card >
                                    <div class="form-check container pt-1" >
                                        <input class="form-check-input" required name="terms" type="checkbox" value="" disabled />
                                        <label class="form-check-label" for="defaultCheck1">
                                            <p>Vendido</p>
                                        </label>
                                    </div>
                                    <CardImg src={A} className="border-0 px-2" />

                                    <h3 className="text-center">Titulo de producto</h3>
                                    <CardBody>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                                    </CardBody>
                                    <h8 className="text-center">precio inicial de la puja</h8>
                                    <p className="text-center">$100.00 Mxn</p>
                                </Card>
                                <Card>
                                    <div class="form-check container pt-1">
                                        <input class="form-check-input" required name="pujado" type="checkbox" value="" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            <p>Pujado</p>
                                        </label>
                                    </div>
                                    <CardImg src={A} className="border-0 px-2" />

                                    <h3 className="text-center">Titulo de producto</h3>
                                    <CardBody>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                                    </CardBody>
                                    <h8 className="text-center">precio inicial de la puja</h8>
                                    <p className="text-center">$100.00 Mxn</p>
                                </Card>
                                <Card>
                                    <div class="form-check container pt-1">
                                        <input class="form-check-input" required name="disponible" type="checkbox" value="" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            <p>Disponible</p>
                                        </label>
                                    </div>
                                    <CardImg src={A} className="border-0 px-2" />

                                    <h3 className="text-center">Titulo de producto</h3>
                                    <CardBody>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                                    </CardBody>
                                    <h8 className="text-center">precio inicial de la puja</h8>
                                    <p className="text-center">$100.00 Mxn</p>
                                </Card>

                            </CardDeck>
                            <br />
                            <CardDeck>

                                <Card >
                                    <div class="form-check container pt-1" >
                                        <input class="form-check-input" required name="terms" type="checkbox" value="" disabled />
                                        <label class="form-check-label" for="defaultCheck1">
                                            <p>Vendido</p>
                                        </label>
                                    </div>
                                    <CardImg src={A} className="border-0 px-2" />

                                    <h3 className="text-center">Titulo de producto</h3>
                                    <CardBody>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                                    </CardBody>
                                    <h8 className="text-center">precio inicial de la puja</h8>
                                    <p className="text-center">$100.00 Mxn</p>
                                </Card>

                                <Card>
                                    <div class="form-check container pt-1">
                                        <input class="form-check-input" required name="disponible" type="checkbox" value="" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            <p>Disponible</p>
                                        </label>
                                    </div>
                                    <CardImg src={A} className="border-0 px-2" />

                                    <h3 className="text-center">Titulo de producto</h3>
                                    <CardBody>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                                    </CardBody>
                                    <h8 className="text-center">precio inicial de la puja</h8>
                                    <p className="text-center">$100.00 Mxn</p>
                                </Card>


                                <Card>
                                    <div class="form-check container pt-1">
                                        <input class="form-check-input" required name="pujado" type="checkbox" value="" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            <p>Pujado</p>
                                        </label>
                                    </div>
                                    <CardImg src={A} className="border-0 px-2" />

                                    <h3 className="text-center">Titulo de producto</h3>
                                    <CardBody>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                                    </CardBody>
                                    <h8 className="text-center">precio inicial de la puja</h8>
                                    <p className="text-center">$100.00 Mxn</p>
                                </Card>
                                <Card>
                                    <div class="form-check container pt-1">
                                        <input class="form-check-input" required name="disponible" type="checkbox" value="" />
                                        <label class="form-check-label" for="defaultCheck1">
                                            <p>Disponible</p>
                                        </label>
                                    </div>
                                    <img src={A} className="border-0 px-2" />

                                    <h3 className="text-center">Titulo de producto</h3>
                                    <CardBody>
                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                                    </CardBody>
                                    <h8 className="text-center">precio inicial de la puja</h8>
                                    <p className="text-center">$100.00 Mxn</p>
                                </Card>

                            </CardDeck>



                            <br />
                            <center>

                                <button className="btn btn-primary col-3" type="submit">Elegir Articulo</button>
                            </center>
                            

                        </ModalBody>


                    </Modal>

                    {/* Aca termina el apartado del modal */}
                </div>
                <br />
                <br />
                <Footer />
            </>
        )
    }
}
export default Subasta;