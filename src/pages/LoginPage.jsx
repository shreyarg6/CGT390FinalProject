import AuthForm from "../components/AuthForm";
import { Link } from "react-router-dom";
import '../styles/login.css';
import '../styles/authForm.css';

const Login = () => {

    return (
        <div className="login-page">
            <h1>Login</h1>
            <div className="login-page-content">
            <AuthForm isRegister={false} />
            <Link to="/register" >Don't have an account? Register here</Link>
        </div>
        </div>
    );
}

export default Login;