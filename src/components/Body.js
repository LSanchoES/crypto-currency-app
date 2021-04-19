import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Button, Col, Container, Image, Modal, OverlayTrigger, Row, Spinner, Tooltip } from "react-bootstrap";
import { ModalComponent } from './ModalComponent';
import refresh from './../assets/refresh.jpg'

export const Body = () => {
    
    //Fetch petition (from useFetch Hook)
    const [state, setstate] = useState('https://coinranking1.p.rapidapi.com/coins')

    const url = state

    const {data, loading} = useFetch(url);
    
    // loading? console.log('loading'): data.data.coins.map(items => console.log(items))
    
    //Refresh Button Helper
    const loader = ()=> { 
        setstate('nothing');
        console.log('Loading...')
    }


    //Refresh Button
    const handleRefresh = () =>{
    loader();
    setTimeout(() => {
        setstate( 'https://coinranking1.p.rapidapi.com/coins' );
        console.log('Refreshed');
        
    }, 500);
        
    }


    // Overlay Bootstrap 
    const renderTooltip = (props) => ( 
        <Tooltip id="button-tooltip" {...props}>
          Refresh
        </Tooltip>
      );


    return (
        <div>
            <Container className="container-body animate__animated animate__fadeIn">

            <Row className=" justify-content-center boton-fila">
            <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                <Image  onClick={handleRefresh}
                        className= "boton"
                        src={refresh}

                        alt="Refresh Button"
                />   
                </OverlayTrigger>
               
            </Row>

            <Row className="fila-superior">
                <Col xs={1}><span></span></Col>
                <Col> <p className="items-superior nombre">CRYPTO CURRENCY</p> </Col>
                <Col> <p className="items-superior">PRICE ($)</p> </Col>
                <Col> <p className="items-superior">CHANGE RATE($)</p> </Col>
            </Row>
           {
                loading? 
                
                <Spinner animation="border" role="status" className=" spin">
                    <span className="sr-only">Loading...</span> 
                </Spinner>
                
                :
                
                 data.data.coins.map(items =>
                    <Row 
                         key={items.id} 
                         className="fila animate__animated animate__fadeIn">
                                                
                        <Col xs={12} md={1}> <Image  src={items.iconUrl}
                                     alt={items.name} 
                                     roundedCircle 
                                     className='imagenes' /> 
                        </Col>
                        <Col> <p className="items nombre">{items.name}</p> </Col>
                        <Col> <p className= "items">{parseFloat(items.price).toFixed(2)}</p> </Col>
                        <Col> <p className={`items ${items.change > 0 ? "verde" : "rojo"}`}>{items.change}</p> </Col>
                   </Row>
                )     
           }
           </Container>
        </div>
    )
}
