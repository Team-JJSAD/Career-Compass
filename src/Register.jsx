import "./global.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import { RegisterPage } from "../components/ui/register-page.jsx";
import { RegisterForm } from "../components/ui/register-form.jsx";

function Register() {
  const BACKEND_URL = 'http://localhost:5173/';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isUsernameEmpty, setUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);
  const [isConfirmPasswordEmpty, setConfirmPasswordEmpty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!username) setUsernameEmpty(true);
    if (!password) setPasswordEmpty(true);
    if (!confirmPassword) setConfirmPasswordEmpty(true);

    if (!isUsernameEmpty && !isPasswordEmpty && !isConfirmPasswordEmpty && password === confirmPassword) {
      try {
        const response = await axiosInstance.post('/register', { username, password});
        console.log('response.data: ', response.data);
        
        if (response.data) {
          console.log('Registration was successful')
          navigate('/Login');
        } else {
          console.error('Registration failed:', response.data.message);
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <RegisterPage onLoginClick={() => navigate("/Login")}>
      <RegisterForm
        onSubmit={handleRegister}
        isUsernameEmpty={isUsernameEmpty}
        isPasswordEmpty={isPasswordEmpty}
        isConfirmPasswordEmpty={isConfirmPasswordEmpty}
        username={username}
        password={password}
        confirmPassword={confirmPassword}
        onUsernameChange={(e) => setUsername(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
        showPassword={showPassword}
        showConfirmPassword={showConfirmPassword}
        onTogglePasswordVisibility={handleTogglePasswordVisibility}
        onToggleConfirmPasswordVisibility={handleToggleConfirmPasswordVisibility}
      />
    </RegisterPage>
  );
}

export default Register;
