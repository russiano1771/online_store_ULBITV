import React, {useContext} from 'react';
import {ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {context} from "../index";

const TypeBar = observer(() => {
    const {device} =useContext(context)
    return (
        <ListGroup>
            <ListGroup>
                {device.types.map( type =>
                <ListGroup.Item
                    active={type.id === device.setSelectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    className={'mt-3'}
                key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
                )}
            </ListGroup>
        </ListGroup>
    );
});

export default TypeBar;