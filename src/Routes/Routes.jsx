import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Feature/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
            }

        ]
    }
])

export default router;