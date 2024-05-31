import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/main.css";
import { SignUp } from "components/signUp/SignUp";

const RegisterPage = () => {
  return (
    <div className="container">
      <SignUp />
     
    </div>
  );
};

export default RegisterPage;
