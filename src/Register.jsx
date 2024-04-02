import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import "./global.css";

function Register() {
  return (
    <>
      <h1>Register</h1>
      <Button>
        {" "}
        <Link to="/">Home</Link>
      </Button>
      <Button>
        {" "}
        <Link to="/Login">Login</Link>
      </Button>
    </>
  );
}

export default Register;
