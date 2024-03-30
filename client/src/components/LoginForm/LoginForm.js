import "./LoginForm.scss";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../global";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}login`, {
        email: loginEmail,
        password: loginPassword,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setIsLoginError(false);
        setErrorMessage("");
        navigate("/home");
      }
    } catch (error) {
      setIsLoginError(true);
      setErrorMessage(error.response.data.error.message);
    }
  };

  return (
    <div>
      {isLoginError && <label style={{ color: "red" }}>{errorMessage}</label>}
      <form className="login" onSubmit={handleSubmit}>
        <h2>Welcome Back!!!</h2>
        <div className="text-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="login__email"
            value={loginEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div className="text-container">
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
