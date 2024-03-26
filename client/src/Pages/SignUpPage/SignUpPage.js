import "./SignUpPage.scss";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div>
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
