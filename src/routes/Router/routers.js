import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Layout";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "courses",
                element: <Courses />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "faq",
                element: <FAQ />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
        ],
    },
]);

export default routers;
