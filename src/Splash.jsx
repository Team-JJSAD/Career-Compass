import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import "./global.css";

function Splash() {
  return (
    <>
      <h1>Splash</h1>
      <Button>
        {" "}
        <Link to="/Login">Login</Link>
      </Button>
      <Button>
        {" "}
        <Link to="/Register">Register</Link>
      </Button>
    </>
  );
}

export default Splash;
