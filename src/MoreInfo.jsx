import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { Textarea } from "../components/ui/textarea.jsx";
import { Label } from "../components/ui/label.jsx";
import { useToast } from "../components/ui/use-toast.js";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import "./global.css";
import compassIcon from '../assets/compass.png';

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
  const [contactPosition, setContactPosition] = useState("");
  const [contactPhoneNumber, setContactPhoneNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");

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
    console.log({
      contactName,
      contactPosition,
      contactPhoneNumber,
      contactEmail,
    });
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
          <img src={compassIcon} alt="Compass Icon" className="h-10 w-10" />
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

          {/* Company Name */}
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

          {/* Position Title*/}
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

          {/* Application Deadline */}
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

          {/* Follow-Up Date */}
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

          {/* Job Description */}
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
          <h2 className="text-xl font-bold text-center mb-16">
            Application Documents
          </h2>
          {/* Attach Resume */}
          <div className="w-full mb-16">
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
          <div className="w-full mb-12">
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
            <Label htmlFor="notes">Notes:</Label>
            <Textarea
              id="notes"
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
            <Button
              onClick={handleSaveNotes}
              className="mt-4 bg-blue-500 hover:bg-blue-700"
            >
              Save Edits
            </Button>
          </div>

          {/* Contacts Section */}
          <div className="mb-4 flex flex-col">
            {/* Contact Name */}
            <div className="mb-2 ">
              <Label htmlFor="contactName">Contact Name:</Label>
              <Input
                type="text"
                id="contactName"
                name="contactName"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>

            {/* Contact Position */}
            <div className="mb-2">
              <Label htmlFor="contactPosition">Contact Position:</Label>
              <Input
                type="text"
                id="contactPosition"
                name="contactPosition"
                value={contactPosition}
                onChange={(e) => setContactPosition(e.target.value)}
              />
            </div>

            {/* Contact Phone Number */}
            <div className="mb-2">
              <Label htmlFor="contactPhoneNumber">Contact Phone Number:</Label>
              <Input
                type="text"
                id="contactPhoneNumber"
                name="contactPhoneNumber"
                value={contactPhoneNumber}
                onChange={(e) => setContactPhoneNumber(e.target.value)}
              />
            </div>

            {/* Contact E-mail */}
            <div className="mb-2">
              <Label htmlFor="contactEmail">Contact E-mail:</Label>
              <Input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div>
              <Button
                className="bg-blue-500 hover:bg-blue-700 mt-2"
                onClick={handleSaveContacts}
              >
                Save Edits
              </Button>
            </div>
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

        {/* Delete this appplication with AlertDialog */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="bg-red-500 hover:bg-red-700">
              Delete this application
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                application and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteApplication}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

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
