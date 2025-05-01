import AuthForm from "../components/AuthForm";
import '../styles/register.css';
import '../styles/authForm.css';

const RegisterPage = () => {

    return (
        <div className="register-page">
            <h1>Register</h1>
            <div className="register-page-content">
            <AuthForm isRegister={true} />
        </div>
        </div>
    );
}

export default RegisterPage;