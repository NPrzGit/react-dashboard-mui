import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes } from "./models";
import { Home, Login } from "./pages";
import { RoutesWithNotFound } from "./utilities";


export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <RoutesWithNotFound>
          {/*default*/}
          <Route path="*" element={<>NOT FOUND</>} />
          <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          {/* dashboard  */}
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={(<Home />)} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </div>
  );

}
