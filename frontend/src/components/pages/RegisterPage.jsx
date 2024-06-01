import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";

const RegisterPage = () => {
  return (
    <div className="main">
      <h1 className="nameTitle">Registration</h1>
      <SignUp />
      <p className="title_inner">
        Already have an account?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
