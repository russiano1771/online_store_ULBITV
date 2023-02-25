import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTER} from "../utils/consts";
const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col
            onClick={() => navigate(DEVICE_ROUTER + '/' + device.id)}
            md={3}>
            <Card
                className={'mt-5'}
            style={{width: 150, cursor: "pointer"}}
            border={"light"}
            >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div
                className={'d-flex justify-content-between mt-2 text-black-50'}
                >
                    <div>Apple...</div>
                    <div
                    className={'d-flex align-items-center'}
                    >
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
                <hr/>
                <h5><span style={{fontSize: 15}}>От</span> {device.price} <span style={{fontSize: 15}}>RUB</span></h5>
            </Card>
        </Col>
    );
};

export default DeviceItem;