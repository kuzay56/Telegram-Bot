import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import Form from "../Form/Form";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (event, email, password) => {
    event.preventDefault();
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
      <Form title="Login" handleClick={handleLogin} />
    </div>
  );
};

export default SignIn;
