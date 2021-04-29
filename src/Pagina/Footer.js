import React from 'react';
import I from '../IMG/imagen1.jpg';
import IG from '../IMG/footer/IG.png'
import FB from '../IMG/footer/FB.png'



class Footer extends React.Component {

  render() {

    return (
      <footer id="myFooter" className="bg-light py-4">
    

        <div className="container">
          <div class="row">

            <div class="card col-sm-3 border-0 bg-light">
              <div>
                <div class="card-body ">
                  <div class="card border-0 d-flex justify-content-between align-items-center" style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <img src={I} width="100%" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card border-0 col-sm-5 bg-light ">
              <div class="card-body ">

                <p>EVENET Subastas y plataformas asociadas<br/> son propiedad de Hello México Agencia<br/>de Contenidos Digitales SA. de C.V</p>
                <p>#EvenetSubastas #SubastaInteractiva <br/> #Subasta #Streaming #Webbinar<br /> #Conferencias</p>
              </div>
            </div>

            <div class="card border-0 col-sm-3 bg-light ">
              <div class="card-body ">
                <p>Socios vendedores.</p>
                <br/>
                <p>Aviso de privacidad.</p>
                <br />
                <p>Vender la plataforma</p>
              </div>
            </div>
            


            
            <div class="card border-0 col-sm-1 bg-light">
              <div class="card-body">
                <div className="justify-content-between ">
                  <a href="https://www.facebook.com/HelloMexicoAgenciaDigital" target="blank_"><img src={FB} height="30px" width="30px" alt="" /></a><br /><br />
                  <a href="https://twitter.com/HelloMexAgencia" target="blank_"><img  height="30px" width="30px" alt="Whatsss" /></a><br /><br />
                  <a href="https://www.instagram.com/hellomx_agencia/" target="blank_"><img src={IG} height="30px" width="30px" alt="" /></a> <br /><br />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="footer-copyright text-center">
          <h8>Hello México Agencia de contenidos digitales S.A. de C.V. 2019. Todos los derechos reservados.®</h8>
      </div>
      </footer>


    )

  }
}

export default Footer;