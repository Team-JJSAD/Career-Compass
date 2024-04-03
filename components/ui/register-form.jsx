import { Button } from "./button.jsx";
import { cn } from "../../lib/utils";

export function RegisterForm({
  onSubmit,
  isFirstNameEmpty,
  isLastNameEmpty,
  isEmailEmpty,
  isUsernameEmpty,
  isPasswordEmpty,
  isConfirmPasswordEmpty,
  firstName,
  lastName,
  email,
  username,
  password,
  confirmPassword,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onUsernameChange,
  onPasswordChange,
  onConfirmPasswordChange,
  showPassword,
  showConfirmPassword,
  onTogglePasswordVisibility,
  onToggleConfirmPasswordVisibility,
}) {
  return (
    <form onSubmit={onSubmit} className={cn("w-full max-w-sm")}>
      {/* Input for first name */}
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium mb-1">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={onFirstNameChange}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            "border-2"
          )}
        />
        {isFirstNameEmpty && (
          <span className="text-red-500 text-sm">Please enter your first name</span>
        )}
      </div>
   

      {/* Input for last name */}
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium mb-1">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={onLastNameChange}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            "border-2"
          )}
        />
        {isLastNameEmpty && (
          <span className="text-red-500 text-sm">Please enter your last name</span>
        )}
      </div>

      {/* Input for email */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            "border-2"
          )}
        />
        {isEmailEmpty && (
          <span className="text-red-500 text-sm">Please enter your email</span>
        )}
      </div>
      {/* Input for username
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={onUsernameChange}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            "border-2"
          )}
        />
        {isUsernameEmpty && (
          <span className="text-red-500 text-sm">Please enter a username</span>
        )}
      </div> */}

      {/* Input for password */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password:
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={onPasswordChange}
            className={cn(
              "w-full px-3 py-2 border border-gray-300 rounded-md",
              "focus:outline-none focus:ring-2 focus:ring-blue-500",
              "border-2"
            )}
          />
        </div>
        {isPasswordEmpty && (
          <span className="text-red-500 text-sm">Please enter a password</span>
        )}
      </div>

      {/* Input for confirm password */}
      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
          Confirm Password:
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            className={cn(
              "w-full px-3 py-2 border border-gray-300 rounded-md",
              "focus:outline-none focus:ring-2 focus:ring-blue-500",
              "border-2"
            )}
          />
        </div>
        {isConfirmPasswordEmpty && (
          <span className="text-red-500 text-sm">Please confirm your password</span>
        )}
      </div>

      {/* Register button */}
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}