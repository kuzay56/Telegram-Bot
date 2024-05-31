import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form">
      <h1 className="register">Register</h1>

      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </form>
  );
};

export default Form;
