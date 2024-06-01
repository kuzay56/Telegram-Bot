import React from "react";
import { Link } from "react-router-dom";
import SignIn from "../SignIn/SignIn";

const LoginPage = () => {
  return (
    <div className="main">
      <h1 className="nameTitle">Login</h1>
      <SignIn />
      <p className="title_inner">
        Create an account.
        <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
