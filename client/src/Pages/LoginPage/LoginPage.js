import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <LoginForm />
      <div>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
