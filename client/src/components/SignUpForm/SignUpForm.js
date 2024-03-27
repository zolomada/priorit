import "./SignUpForm.scss";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../global";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}sign-up`, {
        name: newName,
        email: newEmail,
        password: newPassword,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // if (!newName && !newEmail && !newPassword) {
  //   return <div>Loading....</div>;
  // }

  return (
    <div>
      <form className="signup" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="signup__name"
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="email"
            className="signup__name"
            value={newEmail}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            name="password"
            className="signup__password"
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
