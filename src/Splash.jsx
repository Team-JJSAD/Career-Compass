import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import "./global.css";
import careerCompassImage from '../assets/careerCompass2.jpg';

function Splash() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${careerCompassImage})` }}
    >
      <div className="text-center">
        <h1 className="text-3xl mb-4 text-strong">Career Compass</h1>
        <h2 className="text-2xl mb-4">Track Your Applications, Get More Interviews.</h2>
        <p className="text-gray-700 mb-8">
          Career Compass helps you create resumes and cover letters fast with AI.
          Fill out application forms in one click, and automatically organize your job search.
        </p>
        <div className="flex justify-center space-x-4">
          <Button>
            <Link to="/Login">Login</Link>
          </Button>
          <Button>
            <Link to="/Register">Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Splash;