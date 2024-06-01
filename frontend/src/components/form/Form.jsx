import { useState } from "react";

import "./Form.css";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="form">
      <input
        className="input"
        required
        value={email}
        type="email"
        placeholder="Enter your email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        required
        value={password}
        minLength="6"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password..."
      />
      <button
        type="submit"
        className="btn"
        onClick={(event) => handleClick(event, email, password)}
      >
        {title}
      </button>
    </form>
  );
};

export default Form;
