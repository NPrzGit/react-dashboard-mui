//import { useDispatch } from "react-redux";
import { useDispatch } from 'react-redux'
import { createUser } from "../../../redux/states/user";
import { getMorty } from "../../../services";


function Login() {
  const dispatch = useDispatch();
  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser(result));
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