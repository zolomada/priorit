import "./SignUpPage.scss";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";
import wave from "../../assets/wave.svg";

function SignUpPage() {
  return (
    <div>
      <div>
        <h1>Priorit</h1>
      </div>
      <div>
        <img src={wave} alt="" className="divider" />
      </div>
      <SignUpForm />
      <div>
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
