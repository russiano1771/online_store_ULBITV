import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceapi";




const Device = () => {
    const {id} = useParams()

    const [device,setDevice] = useState({info: []})

    useEffect(() => {
        fetchOneDevice(id).then( data => setDevice(data))
    }, [])



    return (
        <Container
        className={'mt-5'}
        >
            <Row>
                <Col md={4}>
                    <Image width={400} height={400} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <div
                        className={'d-flex justify-content-around align-items-center '}
                    style={{background: `url(${bigStar}) no-repeat center center`, width: 400, height: 400, backgroundSize: "cover", fontSize: 64}}
                    >
                        {device.rating}
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                    style={{width:400, height: 400, border:'5px solid black'}}
                    className={'d-flex flex-column justify-content-center align-items-center'}
                    >

                        <h3>От {device.price} RUB</h3>
                        <Button variant={'outline-dark'}>Add to Basket</Button>

                    </Card>
                </Col>
                <Row
                className={'mt-5'}
                >
                    <h2>About: </h2>
                    {device.info.map( (info, index) =>
                        <Row
                            className={'p-3'}
                        style={{background: index % 2 === 0 ? 'lightgrey': 'transparent'}}
                        >
                            {info.title} : {info.description}
                        </Row>
                    )}
                </Row>
            </Row>
        </Container>
    );
};

export default Device;