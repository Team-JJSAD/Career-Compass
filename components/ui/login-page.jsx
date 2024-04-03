import { Link } from "react-router-dom";
import { Button } from "./button.jsx";
import { cn } from "../../lib/utils.js"

export function LoginPage({ children, onRegisterClick }) {
    return (
      <div className={cn("flex flex-col items-center justify-center min-h-screen")}>
        <h1 className={cn("text-3xl font-bold mb-8")}>Login</h1>
        <div className={cn("flex space-x-4 mb-8")}>
          <Button asChild>
            <Link to="/" className="text-sm">
              Home
            </Link>
          </Button>
          <Button asChild onClick={onRegisterClick}>
            <Link to="/Register" className="text-sm">
              Register
            </Link>
          </Button>
        </div>
        {children}
      </div>
    );
  }