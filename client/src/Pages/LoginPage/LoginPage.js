import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import PrioritHeader from "../../components/PrioritHeader/PrioritHeader";

function LoginPage() {
  return (
    <div className="login__container">
      <PrioritHeader />
      <div className="login__info-body">
        <LoginForm />
        <div>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
