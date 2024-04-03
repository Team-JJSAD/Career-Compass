import "./global.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import { RegisterPage } from "../components/ui/register-page.jsx";
import { RegisterForm } from "../components/ui/register-form.jsx";

function Register() {
  const BACKEND_URL = 'http://localhost:3000/';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [isFirstNameEmpty, setFirstNameEmpty] = useState(false);
  const [isLastNameEmpty, setLastNameEmpty] = useState(false);
  const [isEmailEmpty, setEmailEmpty] = useState(false);
  const [isUsernameEmpty, setUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);
  const [isConfirmPasswordEmpty, setConfirmPasswordEmpty] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!firstName) setFirstNameEmpty(true);
    if (!lastName) setLastNameEmpty(true);
    if (!email) setEmailEmpty(true);
    if (!username) setUsernameEmpty(true);
    if (!password) setPasswordEmpty(true);
    if (!confirmPassword) setConfirmPasswordEmpty(true);

    if (!isUsernameEmpty && !isPasswordEmpty && !isConfirmPasswordEmpty && password === confirmPassword) {
      try {
        const response = await axiosInstance.post('/register', {firstName, lastName, email, password});
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
        isFirstNameEmpty={isFirstNameEmpty}
        isLastNameEmpty={isLastNameEmpty}
        isEmailEmpty={isEmailEmpty}
        username={username}
        password={password}
        firstname={firstName}
        lastname={lastName}
        email={email}
        confirmPassword={confirmPassword}
        onUsernameChange={(e) => setUsername(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
        onFirstNameChange={(e) => setFirstName(e.target.value)}
        onLastNameChange={(e) => setLastName(e.target.value)}
        onEmailChange={(e) => setEmail(e.target.value)}
        showPassword={showPassword}
        showConfirmPassword={showConfirmPassword}
        onTogglePasswordVisibility={handleTogglePasswordVisibility}
        onToggleConfirmPasswordVisibility={handleToggleConfirmPasswordVisibility}
      />
    </RegisterPage>
  );
}

export default Register;
