import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/userSlice";
import Form from "../Form/Form";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (event, email, password) => {
    event.preventDefault();
    const auth = getAuth();
		
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/login");
      })
      .catch(console.error);
  };
  return (
    <div>
      <Form title="Registration" handleClick={handleRegister} />
    </div>
  );
};

export default SignUp;
