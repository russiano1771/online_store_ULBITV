import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {context} from "../index";
import {createDevices, fetchBrands, fetchTypes} from "../http/deviceapi";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(context)

    useEffect(() => {
        fetchTypes().then( data => device.setTypes(data))
        fetchBrands().then( data => device.setBrands(data))
    })

    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter( i => i.number !== number))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]:value} : i))
    }
    const addDevice = () => {
        const formData = new FormData()

        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', device.selectedType.id)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('info', JSON.stringify(info))

        createDevices(formData).then(data => onHide())
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
                    Add new Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Dropdown>
                <Dropdown.Toggle>{device.selectedType.name || 'Select Type'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map( type =>
                    <Dropdown.Item
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                    >
                        {type.name}
                    </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
                <Dropdown
                className={'mt-3'}
                >
                    <Dropdown.Toggle>{device.selectedBrand.name || 'Select brand'}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map( brand =>
                            <Dropdown.Item
                                onClick={() => device.setSelectedBrand(brand)}
                            key={brand.id}
                            >
                                {brand.name}
                            </Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                    placeholder={'enter device name'}
                    className={'mt-3'}
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        type={'number'}
                        placeholder={'enter device price'}
                        className={'mt-3'}
                    />
                    <Form.Control
                        onChange={selectFile}
                        type={'file'}
                        placeholder={'enter device photo'}
                        className={'mt-3'}
                    />
                </Form>
                    <hr/>
                <Button
                    onClick={addInfo}
                    variant={'outline-success'}>add new characteristics</Button>
                <Row>
                    {info.map( i =>
                        <Row
                        className={'mt-3'}
                        >
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                placeholder={'enter title'}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.password}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder={'enter description'}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={'outline-danger'}>Delete</Button>
                            </Col>
                        </Row>
                    )}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={addDevice}>Add</Button>

            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;