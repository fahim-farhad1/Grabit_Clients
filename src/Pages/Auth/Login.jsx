import React from "react";
import Heading from "../../Components/Auth/Heading";
import LoginForm from "../../Components/Auth/LoginForm";

const Login = () => {
  return (
    <div>
      <Heading heading={"Login"} content={"Get access to your Orders, Wishlist and Recommendations."} />
      <LoginForm />
    </div>
  );
};

export default Login;
