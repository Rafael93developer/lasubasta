import React from 'react';
import Footer from '../Footer';
import MenuA from './MenuAdmin';
import { Card, CardDeck, CardImg, CardBody, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import A from '../../IMG/imagen1.jpg';
import { Carousel, CarouselItem } from 'react-bootstrap'


class InicioA extends React.Component {
    state = {
        abrirModal: false,
    }
    abrirModalProducto = () => {
        this.setState({ abrirModal: !this.state.abrirModal });
    }

    render() {

        
        return (
            <>
                <MenuA />
                <br /><br /><br />
                <div className="container">

                    <div className="form-inline">
                        <h1>Catálogo de productos</h1>
                        <h5 className="ml-auto">Aca va el paginador</h5>
                    </div>
                    <br />

                    <CardDeck>
                        <Card>
                            <CardImg src={A} className="border-0 px-2 py-2" />

                            <h3 className="text-center">Titulo de producto</h3>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                            </CardBody>
                            <CardFooter className="text-center border-0 " style={{ background: 'transparent' }}>
                                <button className="btn btn-primary text-center col-9" onClick={this.abrirModalProducto} >Ver precio</button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg src={A} className="border-0 px-2 py-2" />

                            <h3 className="text-center">Titulo de producto</h3>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                            </CardBody>
                            <CardFooter className="text-center border-0 " style={{ background: 'transparent' }}>
                                <button className="btn btn-primary text-center col-9">Ver precio</button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardImg src={A} className="border-0 px-2 py-2" />

                            <h3 className="text-center">Titulo de producto</h3>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                            </CardBody>
                            <CardFooter className="text-center border-0 " style={{ background: 'transparent' }}>
                                <button className="btn btn-primary text-center col-9">Ver precio</button>
                            </CardFooter>
                        </Card>

                    </CardDeck>
                    <br />
                    <CardDeck>
                        <Card>
                            <CardImg src={A} className="border-0 px-2 py-2" />

                            <h3 className="text-center">Titulo de producto</h3>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                            </CardBody>
                            <CardFooter className="text-center border-0 " style={{ background: 'transparent' }}>
                                <button className="btn btn-primary text-center col-9">Ver precio</button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg src={A} className="border-0 px-2 py-2" />

                            <h3 className="text-center">Titulo de producto</h3>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                            </CardBody>
                            <CardFooter className="text-center border-0 " style={{ background: 'transparent' }}>
                                <button className="btn btn-primary text-center col-9">Ver precio</button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardImg src={A} className="border-0 px-2 py-2" />

                            <h3 className="text-center">Titulo de producto</h3>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                            </CardBody>
                            <CardFooter className="text-center border-0 " style={{ background: 'transparent' }}>
                                <button className="btn btn-primary text-center col-9">Ver precio</button>
                            </CardFooter>
                        </Card>


                    </CardDeck>
                    <br />
                    <CardDeck>
                        <Card>
                            <CardImg src={A} className="border-0 px-2 py-2" />

                            <h3 className="text-center">Titulo de producto</h3>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                            </CardBody>
                            <CardFooter className="text-center border-0 " style={{ background: 'transparent' }}>
                                <button className="btn btn-primary text-center col-9"  >Ver precio</button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg src={A} className="border-0 px-2 py-2" />

                            <h3 className="text-center">Titulo de producto</h3>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                            </CardBody>
                            <CardFooter className="text-center border-0 " style={{ background: 'transparent' }}>
                                <button className="btn btn-primary text-center col-9">Ver precio</button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardImg src={A} className="border-0 px-2 py-2" />

                            <h3 className="text-center">Titulo de producto</h3>
                            <CardBody>
                                <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Aenean ante nunc, lectus in, efficitur sagittis libero.</p>
                            </CardBody>
                            <CardFooter className="text-center border-0 " style={{ background: 'transparent' }}>
                                <button className="btn btn-primary text-center col-9">Ver precio</button>
                            </CardFooter>
                        </Card>

                    </CardDeck>
                    {/* Inicia apartado de MOdal de producto*/}

                    <Modal isOpen={this.state.abrirModal} size="xl" >
                        <ModalHeader className="border-0" cssModule={{ 'modal-title': 'w-100 text-right' }} onClick={this.abrirModalProducto}>
                            <h3 className="text-center">Articulos en puja
                        <button type="button" class="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button></h3>
                            <hr />
                        </ModalHeader>
                        <ModalBody>
                            <Row className="px-4">


                                <div className="col-md-6">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img className="d-block w-100" src={A} alt="" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100" src={A} alt=" " />
                                        </Carousel.Item>

                                        <Carousel.Item>
                                            <img className="d-block w-100" src={A} alt="" />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>


                                <Card className="col-md-6">
                                    <h1 className="text-center py-2 px-4">Título del producto</h1>
                                    <p className=" px-4">Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante nunc, posuere.</p>
                                    <br />
                                    <h3 className="py-2 px-4">Precio inicial de la puja</h3>
                                    <h1 className=" px-4">$100.00 Mxn</h1>
                                </Card>
                            </Row>
                        </ModalBody>
                        <ModalFooter className="justify-content-center border-0">
                            <button className="btn btn-primary px-4" onClick={this.abrirModalProducto}>Aceptar</button>
                        </ModalFooter>
                    </Modal>
                    {/* ver porque no me queda esta madre */}

                    <br /><br /><br />

                </div>
                <Footer />
            </>
        )
    }
}
export default InicioA;