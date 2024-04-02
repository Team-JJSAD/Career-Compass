import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import "./global.css";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <Button>
        {" "}
        <Link to="/">Home</Link>
      </Button>
      <Button>
        {" "}
        <Link to="/Register">Register</Link>
      </Button>
      <Button>
        {" "}
        <Link to="/CurrentApps">Login</Link>
      </Button>
    </>
  );
}

export default Login;
