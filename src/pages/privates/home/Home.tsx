import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../../models"
import { RoutesWithNotFound } from "../../../utilities"
import Dashboard from "../dashboard/Dashboard"

const Home = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME}/>} />
      <Route path={PrivateRoutes.HOME} element={<Home/>}/>
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>}/>
    </RoutesWithNotFound>
  )
}

export default Home