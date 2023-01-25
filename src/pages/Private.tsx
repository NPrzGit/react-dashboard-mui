import { Navigate, Route } from "react-router-dom";
import { lazy } from "react";
import { PrivateRoutes } from "../models";
import { RoutesWithNotFound } from "../utilities";


const Dashboard = lazy(() => import("./privates/dashboard/Dashboard"));
const Home = lazy(() => import("./privates/home/Home"));


const Private = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
            <Route path={PrivateRoutes.HOME} element={<Home />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        </RoutesWithNotFound>
    )
}

export default Private