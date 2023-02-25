import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import createType from "./createType";
import {createBrands, createTypes} from "../http/deviceapi";
import {observer} from "mobx-react-lite";

const CreateBrand = observer(({show, onHide}) => {

    const [value, setValue] = useState('')

    const addType = () => {
        createBrands({name: value}).then( data => {
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
                   Add new Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={'enter brand name'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={addType}>Add</Button>

            </Modal.Footer>
        </Modal>
    );
});

export default CreateBrand;