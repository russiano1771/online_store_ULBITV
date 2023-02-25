import React, {useContext} from 'react';
import {Card, Form} from "react-bootstrap";
import {context} from "../index";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} =useContext(context)
    return (
        <Form
        className={'d-flex'}
        >
            {device.brands.map( brand =>
            <Card
                className={'p-3 ms-3 mt-3'}
            key={brand.id}
            >
                {brand.name}
            </Card>
            )}
        </Form>
    );
});

export default BrandBar;