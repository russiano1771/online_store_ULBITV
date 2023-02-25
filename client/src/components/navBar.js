import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTER, LOGIN_ROUTER, REGISTRATION_ROUTER, SHOP_ROUTER} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {context} from "../index";

const NavBar = observer(() => {
    const {user} = useContext(context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(LOGIN_ROUTER)
    }


    return (
        <Navbar bg="dark" variant="dark">
            {user.isAuth ?
                <Container>
                <NavLink
                    style={{color: "white", textDecoration: 'none', fontSize: 50}}
                    to={SHOP_ROUTER}>Купи Девайс</NavLink>
                <Nav className="ms-auto">
                    <Button variant={'outline-light'} className={'me-3'}
                    onClick={() => navigate(ADMIN_ROUTER)}
                    >Admin Panel</Button>
                    <Button
                        onClick={() => logOut()}
                        variant={'outline-light'} className={'me-3'}>Exit</Button>
                </Nav>
            </Container>
            :
                <Container>
                    <NavLink
                        style={{color: "white", textDecoration: 'none', fontSize: 50}}
                        to={SHOP_ROUTER}>Купи Девайс</NavLink>
                    <Nav className="ms-auto">
                        <Button
                            onClick={() => navigate(REGISTRATION_ROUTER)}
                            variant={'outline-light'} className={'me-3'}>Sign In</Button>
                    </Nav>
                </Container>}
        </Navbar>
    );
});

export default NavBar;