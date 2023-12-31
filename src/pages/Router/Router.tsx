import { createBrowserRouter } from "react-router-dom";
// import App from "../../App";
import Login from "@components/login/login";

import Modal from "@components/modal";
import DynamicForm from "@components/modal";
import Fields from "@components/modal/mainmodal";
import MyComponent from "@components/test";
import Customers from "@pages/Admin/Customer";
import Layout from "@components/layout";

export const appRouters = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            { path: "", element: <Login />, },
            { path: "customers", element: <Customers /> },
            { path: "test", element: <MyComponent /> },
        ]
    }
]);
