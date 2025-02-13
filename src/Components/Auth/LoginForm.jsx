import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import google from "../../assets/icons/logo.png";
import hide from "../../assets/icons/hide.png";
import view from "../../assets/icons/view.png";
import { AuthContext } from "../Provider/AuthProvider";

const LoginForm = () => {
  const { googleSignIn } = useContext(AuthContext);
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  const handleGoogleLoginIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };
  return (
    <div className="border p-5 w-[400px] space-y-5 rounded mt-10 relative">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            className="flex right-8 top-40 absolute"
          >
            {showPassword ? (
              <img className="h-6 w-6" src={view} alt="" />
            ) : (
              <img className="h-6 w-6" src={hide} alt="" />
            )}
          </button>
        </div>
        <Link>
          <p className="text-end py-2">forget password ?</p>
        </Link>
        <button
          className="text-white font-semibold bg-secondary px-3 py-2 rounded w-full"
          type="submit"
        >
          Login
        </button>
      </form>
      <button
        onClick={handleGoogleLoginIn}
        className="text-white font-semibold bg-secondary px-3 py-2 rounded w-full"
      >
        <span className="flex items-center gap-1 justify-center">
          <img className="h-5 w-5" src={google} alt="" />
          Login with Google
        </span>
      </button>
      <Link to="/signUp">
        <p className="text-center pt-3 -mb-2 text-primary">Create Account ?</p>
      </Link>
    </div>
  );
};

export default LoginForm;
