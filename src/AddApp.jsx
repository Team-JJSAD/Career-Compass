import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import "./global.css";
import { Input } from "../components/ui/input.jsx";
import { Textarea } from "../components/ui/textarea.jsx";
import { Label } from "../components/ui/label.jsx";

function AddApp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and data addition to CurrentApplications
  };

  return (
    <>
      {/* Nav Bar */}
      <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
        <div className="flex-grow text-center">
          <h1 className="text-2xl font-bold text-white ml-44">
            Career Compass
          </h1>
        </div>
        <div className="flex justify-end">
          <Button asChild>
            <Link to="/CurrentApps" className="text-sm">
              Home
            </Link>
          </Button>
          <Button asChild className="ml-4 bg-red-500 hover:bg-red-700">
            <Link to="/login" className="text-sm">
              Logout
            </Link>
          </Button>
        </div>
      </nav>

      {/* Title Bar */}
      <div className="bg-gray-200 p-2 text-center font-bold text-2xl">
        Add Application
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-5 gap-4">
        {/* First Card */}
        <div className="col-span-1 bg-white p-4 shadow rounded-lg">
          <div className="mb-4">
            <Label htmlFor="companyName">Company Name:</Label>
            <Input type="text" id="companyName" name="companyName" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="positionTitle">Position Title:</Label>
            <Input type="text" id="positionTitle" name="positionTitle" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="appDeadline">Application Deadline:</Label>
            <Input type="date" id="appDeadline" name="appDeadline" required />
          </div>
          <div>
            <Label htmlFor="followUpDate">Follow-Up Date:</Label>
            <Input type="date" id="followUpDate" name="followUpDate" required />
          </div>
        </div>

        {/* Second Card */}
        <div className="col-span-4 bg-white p-4 shadow rounded-lg">
          <div className="mb-4">
            <Label htmlFor="jobDescription">Job Description:</Label>
            <Textarea id="jobDescription" name="jobDescription" rows={4} readOnly />
          </div>
          <div>
            <Label htmlFor="notes">Notes:</Label>
            <Textarea id="notes" name="notes" rows={4} readOnly />
          </div>
        </div>
      </div>

      {/* Buttons Centered Below Cards */}
      <div className="flex justify-center gap-4 mt-4">
        <Button asChild>
          <Link
            to="/CurrentApps"
            className="text-white bg-gray-500 hover:bg-gray-700 rounded px-4 py-2"
          >
            Return to home
          </Link>
        </Button>
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2"
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default AddApp;
