import { Link } from "react-router-dom";
import axiosInstance from "./axiosInstance";
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

      {/* Form */}
      <div className="container mx-auto">
        <div className="flex justify-between mt-2">
          <h2 className="text-2xl font-bold mb-4">Application Details</h2>
          <Button className="bg-red-500">
            <Link to="/CurrentApps">X</Link>
          </Button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="companyName">Company Name:</Label>
            <Input type="text" id="companyName" name="companyName" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="appDate">Application Date:</Label>
            <Input type="date" id="appDate" name="appDate" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="followUpDate">Follow up date:</Label>
            <Input type="date" id="followUpDate" name="followUpDate" required />
          </div>
          <div className="mb-4">
            <Label htmlFor="jobDescription">Job Description:</Label>
            <Textarea id="jobDescription" name="jobDescription" rows={4} />
          </div>
          <div className="mb-4">
            <Label htmlFor="resume">Add Resume:</Label>
            <Input type="file" id="resume" name="resume" />
          </div>
          <div className="mb-4">
            <Label htmlFor="coverLetter">Add Cover Letter:</Label>
            <Input type="file" id="coverLetter" name="coverLetter" />
          </div>
          <div className="mb-4">
            <Label htmlFor="notes">Notes:</Label>
            <Textarea id="notes" name="notes" rows={4} />
          </div>
          <div className="mb-4">
            <Label htmlFor="contact">Add Contact:</Label>
            <Input type="text" id="contact" name="contact" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default AddApp;
