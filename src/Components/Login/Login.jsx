import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './Login.css';

const Login = () => {
    const { login, signup } = useContext(ShopContext);
    const [action, setAction] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        let result;
        if (action === "Login") {
            result = await login(email, password);
            if (!result) {
                navigate('/'); // Redirect to home page after successful login
            } else {
                alert(result); // Display error message if login fails
            }
        } else {
            result = await signup(name, email, password);
            if (!result) {
                setAction("Login"); // Switch to login action after successful signup
            } else {
                alert(result); // Display error message if signup fails
            }
        }
    };
    

    return (
        <div className='login-container'>
            <div className="login-header">
                <div className="login-text">{action}</div>
                <div className="login-underline"></div>
            </div>
            <div className="login-inputs">
                {action === "Login" ? null : (
                    <div className="login-input">
                        <label>Name</label>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                )}

                <div className="login-input">
                    <label>Email</label>
                    <input type="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="login-input">
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {action === "Sign Up" ? null : (
                <div className="forgot-password">
                    Lost Password? <span>Click Here!</span>
                </div>
            )}

            <div className="login-submit-container">
                {action === "Login" ? (
                    <div className="login-submit" onClick={handleSubmit}>Login</div>
                ) : (
                    <div className="login-submit" onClick={handleSubmit}>Sign Up</div>
                )}
            </div>

            <div className="login-toggle-container">
                <div className="login-toggle" onClick={() => setAction(action === "Login" ? "Sign Up" : "Login")}>
                    {action === "Login" ? "Switch to Sign Up" : "Switch to Login"}
                </div>
            </div>
        </div>
    );
};

export default Login;
