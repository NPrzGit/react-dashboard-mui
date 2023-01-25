//import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../../models';
import { createUser, resetUser, UserKey } from "../../../redux/states/user";
import { getMorty } from "../../../services";
import { clearLocalStorage } from '../../../utilities';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      //dispatch(createUser(result));
      dispatch(createUser({...result, rol: 'admin'}));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) { }
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>LOGIN</button>
    </div>

  );
}

export default Login