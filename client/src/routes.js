import {
    ADMIN_ROUTER,
    BASKET_ROUTER,
    DEVICE_ROUTER,
    LOGIN_ROUTER,
    REGISTRATION_ROUTER,
    SHOP_ROUTER
} from "./utils/consts";
import Admin from "./pages/admin";
import Basket from "./pages/basket";
import Shop from "./pages/shop";
import Device from "./pages/device";
import Auth from "./pages/auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTER,
        Component: Admin
    },
    {
        path: BASKET_ROUTER,
        Component: Basket
    }
]
export const publicRoutes = [
    {
        path: SHOP_ROUTER,
        Component: Shop
    },
    {
        path: DEVICE_ROUTER + '/:id',
        Component: Device
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Auth
    },
    {
        path: LOGIN_ROUTER,
        Component: Auth
    },

]