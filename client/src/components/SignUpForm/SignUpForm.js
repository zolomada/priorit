import "./SignUpForm.scss";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../global";

function SignUpForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}sign-up`, values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="signup__name"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="name">Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            name="password"
            className="signup__password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
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
        <button type="button" className="signup__button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
