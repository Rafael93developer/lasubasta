import { Modal } from 'bootstrap';
import React from 'react';
import Inicio from './Usuario/Inicio';
import ModalInicio from './ModalInicio';
class Home extends React.Component{

    render() {
        return(
            <>
            {/* <ModalLogin /> */}
            <ModalInicio />
            <Inicio />
</>

            
        )
    }
}
export default Home;