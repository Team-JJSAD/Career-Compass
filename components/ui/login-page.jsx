import { Link } from "react-router-dom";
import { Button } from "./button.jsx";
import { cn } from "../../lib/utils.js";
import compassIcon from '/assets/compass_icon.png';

export function LoginPage({ children, onRegisterClick }) {
  return (
    <div>
      {/* Nav Bar */}
      <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
    <div className="flex items-center">
      {/* Apply style directly to the img element */}
      <img src={compassIcon} alt="Compass Icon" style={{ width: '60px', height: '60px' }} />
      <h1 className="text-2xl font-bold text-white ml-2">Career Compass</h1>
    </div>
        <div className="flex justify-end">
          <Button asChild>
            <Link to="/" className="text-sm">
              Home
            </Link>
          </Button>
          <Button asChild onClick={onRegisterClick} className="ml-4">
            <Link to="/Register" className="text-sm">
              Register
            </Link>
          </Button>
        </div>
      </nav>

      {/* Everything Else */}
      <div
        className={cn("flex flex-col items-center justify-center mt-24")}
      >
        <h1 className={cn("text-3xl font-bold mb-8")}>Login</h1>
        {children}
      </div>
    </div>
  );
}
