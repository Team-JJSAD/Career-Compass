import { Button } from "./button.jsx";
import { cn } from "../../lib/utils";

export function LoginForm({ onSubmit, isUsernameEmpty, isPasswordEmpty, username, password, onUsernameChange, onPasswordChange }) {
  return (
    <form onSubmit={onSubmit} className={cn("w-full max-w-sm")}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Email:
        </label>
        <input
          type="email"
          id="username"
          value={username}
          onChange={onUsernameChange}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            "border-3"
          )}
        />
        {isUsernameEmpty && (
          <span className="text-red-500 text-sm">Please enter your username</span>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          className={cn(
            "w-full px-3 py-2 border border-gray-300 rounded-md",
            "focus:outline-none focus:ring-2 focus:ring-blue-500"
          )}
        />
        {isPasswordEmpty && (
          <span className="text-red-500 text-sm">Please enter your password</span>
        )}
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
}