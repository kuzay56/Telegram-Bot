import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className="main">
      <h1 className="nameTitle">Welcome!</h1>
      <button className="btn" onClick={() => dispatch(removeUser())}>
        Log out, {email}
      </button>
    </div>
  ) : (
    <Navigate replace to={"/login"} />
  );
};

export default HomePage;
