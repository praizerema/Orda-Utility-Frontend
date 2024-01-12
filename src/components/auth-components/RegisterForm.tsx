import React from "react";
import { Input } from "../input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./AuthSchema";
import { RegisterFormData } from "../../react-app-env";
import { Button } from "../button/Button";

interface AuthFormProps {
  onSubmit: (data: RegisterFormData) => void;
}

export const RegisterForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmitHandler = (data: RegisterFormData) => {
    onSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-5">
        <div className="flex justify-between gap-x-5">
          <Input
            label="First Name"
            type="text"
            {...register("first_name")}
            inputClass="w-full"
          />
          <Input
            label="Last Name"
            type="text"
            {...register("last_name")}
            inputClass="w-full"
          />
        </div>
        <Input
          label="Email"
          type="email"
          {...register("email")}
          inputClass="w-full"
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          inputClass="w-full"
        />

        <Input
          label="Confirm Password"
          type="password"
          {...register("confirm_password")}
          inputClass="w-full"
        />
        <div className="text-right">
          <Button
            text="Register"
            className="bg-green-800 text-white px-5 py-2 rounded hover:bg-green-300"
          />
        </div>
      </form>
    </div>
  );
};
