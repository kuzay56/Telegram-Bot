import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hook/use-auth";
import { removeUser } from "store/slices/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const [isAuth, email] = useAuth();
  return isAuth ? (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Link to="/login"></Link>
  );
};

export default HomePage;