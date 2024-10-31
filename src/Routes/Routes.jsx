import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Feature/Login/Login";
import Register from "../Feature/Register/Register";
import News from "../Pages/News/News";
import PrivateRoutes from "./PrivateRoutes";
import MyAccount from "../Pages/MyAccount/MyAccount";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoutes><News></News></PrivateRoutes>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/Career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myaccount',
                element: <PrivateRoutes><MyAccount></MyAccount></PrivateRoutes>
            }

        ]
    }
])

export default router;