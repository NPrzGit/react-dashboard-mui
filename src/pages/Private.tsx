import { Navigate, Route } from "react-router-dom";
import { lazy } from "react";
import { PrivateRoutes } from "../models";
import { RoutesWithNotFound } from "../utilities";



const Home = lazy(() => import("./privates/home/Home"));
const Dashboard = lazy(() => import("./privates/dashboard/Dashboard"));
const Customers = lazy(() => import("./privates/customers/Customers"));
const Employees = lazy(() => import("./privates/employees/Employees"));
const Orders = lazy(() => import("./privates/orders/Orders"));

const Private = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} >
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.ORDERS} element={<Orders />} />
                <Route path={PrivateRoutes.CUSTOMERS} element={<Customers />} />
                <Route path={PrivateRoutes.EMPLOYEES} element={<Employees />} />
            </Route>
        </RoutesWithNotFound>
    )
}

export default Private