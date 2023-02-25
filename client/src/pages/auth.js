import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation, useNavigate,} from "react-router-dom";
import {LOGIN_ROUTER, REGISTRATION_ROUTER, SHOP_ROUTER} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {context} from "../index";



const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTER
    const {user} = useContext(context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const click = async () => {
        let data;
        try {
            if (isLogin){
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTER)
        } catch (e) {
            alert(e.response.data.message)
        }
    }



    return (
        <Container
            className={'d-flex justify-content-center align-items-center'}
        style={{height: window.innerHeight - 54}}
        >
          <Card
          style={{width: 700, border:'5px solid lightgrey'}}
          >
            <Form
            className={'p-5 flex-column align-items-center'}
            >
                <h2
                className={'d-flex justify-content-center'}
                >{isLogin?'Authorization':'Registration'}</h2>
                <Form.Control
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={'p-3 mt-3'}
                placeholder={'enter your email'}
                />
                <Form.Control
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={'p-3 mt-3'}
                    placeholder={'enter your password'}
                />
                {isLogin?
                    <Form
                    className={'d-flex justify-content-between mt-3'}
                    >
                    <div>Don't have account? <NavLink to={REGISTRATION_ROUTER}> Register!</NavLink></div>
                    <Button variant={'outline-dark'}
                        onClick={click}
                    > Sign In </Button>
                </Form>
                :
                    <Form
                    className={'d-flex justify-content-between mt-3'}
                    >
                        <div>Already have account? <NavLink to={LOGIN_ROUTER}> Sign In!</NavLink></div>
                        <Button variant={'outline-dark'}
                            onClick={click}
                        > Registration </Button>
                    </Form>
                }
            </Form>
          </Card>
        </Container>
    );
});

export default Auth;