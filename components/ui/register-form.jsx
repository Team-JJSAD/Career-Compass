import { Button } from "./button.jsx";
import { cn } from "../../lib/utils";

export function RegisterForm({
  onSubmit,
  isUsernameEmpty,
  isPasswordEmpty,
  isConfirmPasswordEmpty,
  username,
  password,
  confirmPassword,
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
      </div>
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
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}