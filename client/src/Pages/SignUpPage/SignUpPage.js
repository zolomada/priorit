import "./SignUpPage.scss";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";
import PrioritHeader from "../../components/PrioritHeader/PrioritHeader";

function SignUpPage() {
  return (
    <div className="signup__container">
      <PrioritHeader />
      <div className="signup__info-body">
        <SignUpForm />
        <div>
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
