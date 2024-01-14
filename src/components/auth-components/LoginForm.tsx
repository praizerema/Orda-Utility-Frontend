import React from "react";
import { Input } from "../input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./AuthSchema";
import { LoginFormData } from "../../react-app-env";
import { Button } from "../button/Button";

interface AuthFormProps {
  onSubmit: (data: LoginFormData) => void;
}

export const LoginForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  
  const onSubmitHandler = (data: LoginFormData) => {
    onSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
        <Input
          label="Email"
          type="email"
          {...register("email")}
          inputClass="w-full"
          errorMessage={errors?.email?.message}
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          inputClass="w-full"
          errorMessage={errors?.password?.message}
        />
        <div className="text-right">
          <Button
            text="Log In"
            className="bg-green-800 text-white px-5 py-2 rounded hover:bg-green-300"
          />
        </div>
      </form>
    </div>
  );
};
