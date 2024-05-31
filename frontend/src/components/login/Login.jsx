import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import Form from "./../form/Form";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <div>
      <Form title="register" handleClick={handleLogin} />
    </div>
  );
};

export default Login;
