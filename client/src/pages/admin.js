import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../models/createType";
import CreateBrand from "../models/createBrand";
import CreateDevice from "../models/createDevice";


const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)


    return (
     <Container
     className={'d-flex justify-content-center align-items-center flex-column'}
     >
         <Button
             onClick={() => setTypeVisible(true)}
             variant={'outline-success'} style={{width:600}} className={'mt-3'}>Add Type</Button>
         <Button
             onClick={() => setBrandVisible(true)}
             variant={'outline-success'} style={{width:700}} className={'mt-3'}>Add Brand</Button>
         <Button
             onClick={() => setDeviceVisible(true)}
             variant={'outline-success'} style={{width:800}} className={'mt-3'}>Add Device</Button>


         <CreateType
            show={typeVisible}
            onHide={() => setTypeVisible(false)}
         />
         <CreateBrand
             show={brandVisible}
             onHide={() => setBrandVisible(false)}
         />
         <CreateDevice
             show={deviceVisible}
             onHide={() => setDeviceVisible(false)}
         />

     </Container>
    );
};

export default Admin;