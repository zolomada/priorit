import "./LoginForm.scss";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../global";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}login`, {
        email: loginEmail,
        password: loginPassword,
      });
      if (response.data.Status === "Login successful") {
        navigate("/home");
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="login__name"
            value={loginEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            name="password"
            className="login__password"
            value={loginPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="login__button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
