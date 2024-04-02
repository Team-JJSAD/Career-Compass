import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import "./global.css";

function CurrentApps() {
  return (
    <>
      <h1>Current Apps</h1>
      <Button>
        {" "}
        <Link to="/">Home</Link>
      </Button>
      <Button>
        {" "}
        <Link to="/">Logout</Link>
      </Button>
      <Button>
        {" "}
        <Link to="/MoreInfo">More Info</Link>
      </Button>
    </>
  );
}

export default CurrentApps;
