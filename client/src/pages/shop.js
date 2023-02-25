import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/typeBar";
import BrandBar from "../components/brandBar";
import DeviceList from "../components/deviceList";
import {fetchBrands, fetchDevice, fetchTypes} from "../http/deviceapi";
import {context} from "../index";
import {observer} from "mobx-react-lite";




const Shop = observer(() => {
    const {device} = useContext(context)

    useEffect(() => {
        fetchTypes().then( data => device.setTypes(data))
        fetchBrands().then( data => device.setBrands(data))
        fetchDevice().then( data => device.setDevices(data.rows))
    }, [])

    return (
        <Container>
          <Row>
              <Col md={3}>
                  <TypeBar/>
              </Col>
              <Col md={9}>
                    <BrandBar/>
                  <hr/>
                  <DeviceList/>
              </Col>
          </Row>
        </Container>
    );
});

export default Shop;