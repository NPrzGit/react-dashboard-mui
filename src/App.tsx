import { Skeleton } from "@mui/material";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Logout from "./components/Logout/Logout";
import { AuthGuard } from "./guards";
import RolGuard from "./guards/rol.guard";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import { Dashboard, Private } from "./pages";
import store from "./redux/store";
import { RoutesWithNotFound } from "./utilities";

const Login = lazy(() => import("./pages/publics/login/Login"));
const Home = lazy(() => import("./pages/privates/home/Home"));

export default function App() {

  return (
    <div className="App">
      <Suspense fallback={
        <>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </>
      }>
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              {/*default*/}
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              {/* dashboard  */}
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={(<Private />)} />
              </Route>
              <Route element={<RolGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );

}
