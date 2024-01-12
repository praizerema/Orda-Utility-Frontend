import { useDispatch } from "react-redux";
import { loginUser } from "../features/authSlice";
import { LoginFormData } from "../react-app-env";
import { AppDispatch } from "../features/store";
import { LoginForm } from "../components/auth-components/LoginForm";
const Login = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (data: LoginFormData) => {
    await dispatch(loginUser({ ...data }));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border w-1/2 rounded-2xl p-8">
        <h2 className="font-bold text-3xl mb-4 text-green-800">Login</h2>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
