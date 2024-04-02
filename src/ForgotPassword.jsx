import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import "./global.css";

function ForgotPassword() {
  return (
    <>
      <h1>Forgot Password</h1>
      <Button>
        {" "}
        <Link to="/">Home</Link>
      </Button>
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

export default ForgotPassword;
