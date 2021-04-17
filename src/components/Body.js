import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";

export const Body = () => {
    
    const [state, setstate] = useState('https://coinranking1.p.rapidapi.com/coins')

    const url = state

    const {data, loading} = useFetch(url);
    
    // loading? console.log('loading'): data.data.coins.map(items => console.log(items))
    const loader = ()=> { 
        setstate('nothing');
        console.log('Loading...')
    }

    const handleRefresh = () =>{
    loader();
    setTimeout(() => {
        setstate( 'https://coinranking1.p.rapidapi.com/coins' );
        console.log('Refreshed');
        
    }, 500);
        
    }


    return (
        <div>
            <Container className="container-body animate__animated animate__fadeIn">

            <Row className=" justify-content-center boton-fila">
                <Button onClick={handleRefresh}
                        className= "boton"
                >   
                Refresh
                </Button>
            </Row>

            <Row className="fila-superior">
                <Col> <p className="items-superior nombre">Crypto Currency</p> </Col>
                <Col> <p className="items-superior">Price ($)</p> </Col>
                <Col> <p className="items-superior">Change rate ($)</p> </Col>
            </Row>
           {
                loading? 
                
                <Spinner animation="border" role="status" className=" spin">
                    <span className="sr-only">Loading...</span> 
                </Spinner>
                
                :
                
                 data.data.coins.map(items =>
                    <Row key={items.id} className="fila animate__animated animate__fadeIn">
        
                        <Col xs={12} md={1}> <Image  src={items.iconUrl}
                                     alt={items.name} 
                                     roundedCircle 
                                     className='imagenes' /> 
                        </Col>
                        <Col> <p className="items nombre">{items.name}</p> </Col>
                        <Col> <p className="items">{items.price}</p> </Col>
                        <Col> <p className="items">{items.change}</p> </Col>

                   </Row>
                    ) 
           }
           </Container>
        </div>
    )
}
