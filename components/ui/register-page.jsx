import { Link } from "react-router-dom";
import { Button } from "./button.jsx";
import { cn } from "../../lib/utils";

export function RegisterPage({ children, onLoginClick }) {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-screen")}>
      <h1 className={cn("text-3xl font-bold mb-8")}>Register</h1>
      <div className={cn("flex space-x-4 mb-8")}>
        <Button asChild>
          <Link to="/" className="text-sm">
            Home
          </Link>
        </Button>
        <Button asChild onClick={onLoginClick}>
          <Link to="/Login" className="text-sm">
            Login
          </Link>
        </Button>
      </div>
      {children}
    </div>
  );
}