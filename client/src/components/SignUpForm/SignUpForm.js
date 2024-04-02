import "./SignUpForm.scss";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../global";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}signup`, {
        name: newName,
        email: newEmail,
        password: newPassword,
      });
      if (response.data.Status === "Success") {
        navigate("/login");
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div className="text-container">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="signup__text"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div className="text-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            className="signup__text"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div className="text-container">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            name="password"
            className="signup__text signup__password"
            value={newPassword}
            onChange={handlePasswordChange}
          />
        </div>
        {/* <div>
          <label htmlFor="name">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            name="password"
            className="signup__password"
          />
        </div> */}
        <button type="submit" className="signup__button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
