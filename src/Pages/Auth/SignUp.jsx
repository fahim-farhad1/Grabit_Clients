import React from "react";
import RegForm from "../../Components/Auth/RegForm";
import Heading from "../../Components/Auth/Heading";

const SignUp = () => {
  return (
    <div>
      <Heading
        heading={"Sign Up"}
        content={"Best place to buy and sell digital products."}
      />
      <RegForm />
    </div>
  );
};

export default SignUp;
