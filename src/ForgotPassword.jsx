import "./global.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";
import { ForgotPasswordPage } from "../components/ui/forgot-password-page.jsx";
import { ForgotPasswordForm } from "../components/ui/forgot-password-form.jsx";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      try {
        const response = await axiosInstance.post("/ForgotPassword", { username, newPassword });
        if (response.data.message === "Password reset successful") {
          navigate("/Login");
        } else {
          console.error("Password reset error:", response.data.message);
        }
      } catch (error) {
        console.error("Password reset error:", error);
      }
    } else {
      console.error("Passwords do not match");
    }
  };

  return (
    <ForgotPasswordPage>
      <ForgotPasswordForm
        onSubmit={handleResetPassword}
        username={username}
        newPassword={newPassword}
        confirmPassword={confirmPassword}
        onUsernameChange={(e) => setUsername(e.target.value)}
        onNewPasswordChange={(e) => setNewPassword(e.target.value)}
        onConfirmPasswordChange={(e) => setConfirmPassword(e.target.value)}
      />
    </ForgotPasswordPage>
  );
}

export default ForgotPassword;