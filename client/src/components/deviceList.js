import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {context} from "../index";
import DeviceItem from "./deviceItem";
import {observer} from "mobx-react-lite";

const DeviceList = observer(() => {
    const {device} =useContext(context)
    return (
        <Row
        className={'mt-5'}
        >
            {device.devices.map( i =>
            <DeviceItem
            key={device.id}
            device={i}
            >
                {device.name}
            </DeviceItem>
            )}
        </Row>
    );
});

export default DeviceList;