import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTER} from "../utils/consts";
import {context} from "../index";

const AppRouter = () => {
    const {user} = useContext(context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            <Route path={'*'} element={<Navigate to={SHOP_ROUTER}/>} />
        </Routes>
    );
};

export default AppRouter;