import "./global.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axiosInstance from './axiosInstance'
import { LoginPage } from "../components/ui/login-page.jsx";
import { LoginForm } from "../components/ui/login-form.jsx";

function Login() {
  const BACKEND_URL = 'http://localhost:5173/'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setshow] = useState('');
  const [isUsernameEmpty, setUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);
  const navigate = useNavigate()

  const handleView = () => setshow(!show);
  const handleLogin = async (event) => {
    event.preventDefault();
    if(!username) setUsernameEmpty(true);
    if(!password) setPasswordEmpty(true);
    if(!isPasswordEmpty && !isUsernameEmpty){
      try {
        const response = await axiosInstance.post('/login', {
          username,
          password
        });

        if (response.data.username) {
          navigate('/CurrentApps');
        } else {
          console.error('Login failed:', response.data.message);
        }
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };
  return (
    <LoginPage onRegisterClick={() => navigate("/Register")}>
    <LoginForm
      onSubmit={handleLogin}
      isUsernameEmpty={isUsernameEmpty}
      isPasswordEmpty={isPasswordEmpty}
      username={username}
      password={password}
      onUsernameChange={(e) => setUsername(e.target.value)}
      onPasswordChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={() => navigate("/ForgotPassword")}>Forgot Password</button>
  </LoginPage>
  );
}

export default Login;
