import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import google from "../../assets/icons/logo.png";
import hide from "../../assets/icons/hide.png";
import view from "../../assets/icons/view.png";
import { AuthContext } from "../Provider/AuthProvider";
import { use } from "react";

const RegForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="border p-5 w-[400px] rounded mt-5 relative">
      <form className=" space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="text-secondary font-semibold">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            className="py-3 px-5 border bg-white rounded focus:outline-primary w-full"
            type="text"
            placeholder="enter your name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-secondary font-semibold">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="py-3 px-5 border bg-white rounded focus:outline-primary w-full"
            type="email"
            placeholder="enter your email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-secondary font-semibold">
            Phone<span className="text-red-500">*</span>
          </label>
          <input
            className="py-3 px-5 border bg-white rounded focus:outline-primary w-full"
            type="number"
            placeholder="enter your phone number"
            {...register("phone", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label className="text-secondary font-semibold">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            className="py-3 px-5 border bg-white rounded focus:outline-primary w-full"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: {
                hasLowercase: (value) =>
                  /[a-z]/.test(value) || "At least one lowercase letter",
                hasUppercase: (value) =>
                  /[A-Z]/.test(value) || "At least one uppercase letter",
                hasNumber: (value) =>
                  /[0-9]/.test(value) || "At least one number",
                hasSpecial: (value) =>
                  /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value) ||
                  "At least one special character",
              },
            })}
          />
          {errors.password && (
            <div className="text-red-600">
              {Object.values(errors.password?.message)}
            </div>
          )}
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="flex right-8 top-[370px] absolute"
          >
            {showPassword ? (
              <img className="h-6 w-6" src={view} alt="" />
            ) : (
              <img className="h-6 w-6" src={hide} alt="" />
            )}
          </button>
        </div>
        <button
          className="text-white font-semibold bg-secondary px-3 py-2 rounded w-full mt-3"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <Link to="/login">
        <p className="text-center pt-3 -mb-2 text-primary">
          Already have an account ?
        </p>
      </Link>
    </div>
  );
};

export default RegForm;
