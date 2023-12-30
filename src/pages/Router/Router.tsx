import { createBrowserRouter } from "react-router-dom";
// import App from "../../App";
import Login from "@components/login/login";
import Customers from "@pages/Admin/Customer/ListCustomer";
import Layout from "@components/layout";
import TestComponent from "@components/test";

export const appRouters = createBrowserRouter([
    {
        path: '/',
        element: <TestComponent></TestComponent>,
        children: [
            { path: "", element: <Login />, },
            { path: "customers", element: <Customers /> },
        ]
    }
]);
