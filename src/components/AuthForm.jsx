import { useState, useEffect, useContext, useRef } from "react";

import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { use } from "react";
import useAuthForm from "../hooks/authFormHook";
import '../styles/login.css';

const AuthForm = ({isRegister = false}) => {

    const { data, error, submitting, successMessage, handleChange, handleSubmit } = useAuthForm(isRegister);

    const usernameRef = useRef(null);

    // const { login } = useContext(AuthContext);
    // const [data, setData] = useState({
    //     username: "",
    //     password: "",
    //     email: "",
    // });

    // const [error, setError] = useState("");
    // const [submitting, setSubmitting] = useState(false);
    // const [successMessage, setSuccessMessage] = useState("");
    // const navigate = useNavigate();

    // useEffect(() => {
    //     usernameRef.current.focus();
    // }, []);

    // const handleChange = (e) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setSubmitting(true);
    //     const formData = new FormData();
    //     formData.append("username", data.username.trim());
    //     formData.append("password", data.password.trim());
    //     if (isRegister) formData.append("email", data.email.trim());
    //     formData.append("action", isRegister ? "register" : "login");

//         try {
//             const response = await fetch (
//                 "https://web.ics.purdue.edu/~nrusk/profile-app/auth.php",
//                 {
//                     method: "POST",
//                     body: formData,
//                 }
//             );
//             const data = await response.json();
//             if (data.success) {
//                 setData({
//                     username: "",
//                     password: "",
//                     email: "",
//                 });
//                 setSuccessMessage(data.success);
//                 setError("");
//                 login();
//                 navigate("/");
//         } else {
//             setError(data.error);
//             setSuccessMessage("");
//         }
//     } catch (error) {
//         setError(error.message);
//         setSuccessMessage("");
//     } finally {
//         setSubmitting(false);
//     }
// };

    return (
        <form onSubmit={handleSubmit} className="auth-form" >
            <input
                // ref={usernameRef}
                type="text"
                name="username"
                placeholder="Username"
                required
                value={data.username}
                onChange={handleChange}
            />
            {isRegister && (
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={data.email}
                    onChange={handleChange}
                />
            )}
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength="8"
                vaule={data.password}
                onChange={handleChange}
            />
            <button
                type="submit"
                disabled={
                    submitting ||
                    data.username.trim() === "" ||
                    (isRegister && data.email.trim() === "") ||
                    data.password.trim() === ""
                }
            >
                Submit
            </button>
            {error && <p >{error}</p>}
            {successMessage && <p >{successMessage}</p>}
        </form>
    );
};
export default AuthForm;