import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { Textarea } from "../components/ui/textarea.jsx";
import { Label } from "../components/ui/label.jsx";
import { useToast } from "../components/ui/use-toast.js";
import "./global.css";

function MoreInfo() {
  const { toast } = useToast();

  /* ---------------------------------- STATE --------------------------------- */
  // State for first card form fields
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  // State for third card form fields
  const [notes, setNotes] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  /* ---------------------------- HANDLE FUNCTIONS ---------------------------- */

  // Handle saving edits
  const handleSaveFirstCard = () => {
    // Implement save logic here
    console.log({
      companyName,
      applicationDeadline,
      followUpDate,
      jobDescription,
    });
    toast({
      title: "Success!",
      description: "Your application information has been saved.",
    });
    // TODO: Placeholder for future backend integration
  };

  // Handle saving notes edits
  const handleSaveNotes = () => {
    console.log({ notes });
    toast({
      title: "Success!",
      description: "Your notes have been saved.",
    });
    // TODO: Placeholder for future backend integration
  };

  // Handle saving contacts edits
  const handleSaveContacts = () => {
    console.log({ contactName, position, phoneNumber, email });
    toast({
      title: "Success!",
      description: "Your contacts have been saved.",
    });
    // TODO: Placeholder for future backend integration
  };

  // Function to handle deleting an application
  const handleDeleteApplication = () => {
    console.log("Delete application");
    // TODO: Placeholder for future backend integration
  };

  // Function to handle saving all edits
  const handleSaveAllEdits = () => {
    console.log("Save all edits");
    toast({
      title: "Success!",
      description: "All edits have been saved.",
    });
    // TODO: Placeholder for future backend integration
  };

  /* ----------------------------- RENDER THE PAGE ---------------------------- */
  return (
    <div className="flex flex-col h-dvh">
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
        More Info
      </div>

      {/* Content Bar */}
      <div className="flex-grow container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 pb-24">
        {/* First Card */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-bold text-center mb-4">
            Application Info
          </h2>
          <div className="mb-4">
            <Label htmlFor="companyName">Company Name:</Label>
            <Input
              type="text"
              id="companyName"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="positionTitle">Position Title:</Label>
            <Input
              type="text"
              id="positionTitle"
              name="positionTitle"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="applicationDeadline">Application Deadline:</Label>
            <Input
              type="date"
              id="applicationDeadline"
              name="applicationDeadline"
              value={applicationDeadline}
              onChange={(e) => setApplicationDeadline(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="followUpDate">Follow-Up Date:</Label>
            <Input
              type="date"
              id="followUpDate"
              name="followUpDate"
              value={followUpDate}
              onChange={(e) => setFollowUpDate(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="jobDescription">Job Description:</Label>
            <Textarea 
              id="jobDescription" 
              name="jobDescription" 
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={4} 
            />
          </div>


          <Button
            className="bg-blue-500 hover:bg-blue-700"
            onClick={handleSaveFirstCard}
          >
            Save Edits
          </Button>
        </div>

        {/* Second Card for Attach Resume and Cover Letter */}
        <div className="bg-white shadow rounded p-4 flex flex-col items-center">
          <h2 className="text-xl font-bold text-center mb-4">
            Application Documents
          </h2>
          {/* Attach Resume */}
          <div className="w-full mb-8">
            <h3 className="text-lg font-semibold mb-2 text-center">
              Attach Resume
            </h3>
            <div className="flex justify-center space-x-4">
              <Button className="bg-blue-500 hover:bg-blue-700">View</Button>
              <Button className="bg-green-500 hover:bg-green-700">
                Upload
              </Button>
            </div>
          </div>

          {/* Attach Cover Letter */}
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-2 text-center">
              Attach Cover Letter
            </h3>
            <div className="flex justify-center space-x-4">
              <Button className="bg-blue-500 hover:bg-blue-700">View</Button>
              <Button className="bg-green-500 !important hover:bg-green-700">
                Upload
              </Button>
            </div>
          </div>
        </div>

        {/* Third Card for Notes and Contacts */}
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-bold text-center mb-4">
            Application Notes
          </h2>
          {/* Notes Section */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="notes"
              rows="3"
              placeholder="Enter notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <Button
              onClick={handleSaveNotes}
              className="mt-4 bg-blue-500 hover:bg-blue-700"
            >
              Save Edits
            </Button>
          </div>

          {/* Contacts Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Contacts</h3>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              placeholder="Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="bg-blue-500 hover:bg-blue-700"
              onClick={handleSaveContacts}
            >
              Save Edits
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="mt-auto bg-gray-100 p-4 fixed bottom-0 w-full flex justify-between items-center">
        <Button asChild>
          <Link
            to="/CurrentApps"
            className="text-white bg-gray-500 hover:bg-gray-700 rounded px-4 py-2"
          >
            Return to home
          </Link>
        </Button>
        <Button
          onClick={handleDeleteApplication}
          className="bg-red-500 hover:bg-red-700"
        >
          Delete this Application
        </Button>
        <Button
          onClick={handleSaveAllEdits}
          className="bg-teal-500 hover:bg-teal-700"
        >
          Save All Edits
        </Button>
      </div>
    </div>
  );
}

export default MoreInfo;
