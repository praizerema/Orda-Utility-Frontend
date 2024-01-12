import { useDispatch } from "react-redux";
import { registerUser } from "../features/authSlice";
import { RegisterFormData } from "../react-app-env";
import { AppDispatch } from "../features/store";
import { RegisterForm } from "../components/auth-components/RegisterForm";
const Register = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (data: RegisterFormData) => {
    await dispatch(registerUser({ ...data }));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border w-1/2 rounded-2xl p-8">
        <h2 className="font-bold text-3xl mb-4 text-green-800">Register</h2>
        <RegisterForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Register;
