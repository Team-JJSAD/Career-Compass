import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import "./global.css";

function MoreInfo() {
  return (
    <>
      <h1>More Info</h1>
      <Button>
        {" "}
        <Link to="/CurrentApps">Home</Link>
      </Button>
      <Button>
        {" "}
        <Link to="/">Logout</Link>
      </Button>
    </>
  );
}

export default MoreInfo;
