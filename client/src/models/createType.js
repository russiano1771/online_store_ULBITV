import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createTypes} from "../http/deviceapi";

const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('')

    const addTypes = () => {
        createTypes({name: value}).then( data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                placeholder={'enter type name'}
                />
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={addTypes}>Add</Button>

            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;