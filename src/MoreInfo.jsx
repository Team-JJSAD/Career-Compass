import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import './global.css';

function MoreInfo() {
  /* ---------------------------------- STATE --------------------------------- */
  // State for first card form fields
  const [companyName, setCompanyName] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // State for third card form fields
  const [notes, setNotes] = useState('');
  const [contactName, setContactName] = useState('');
  const [position, setPosition] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  /* ---------------------------- HANDLE FUNCTIONS ---------------------------- */

  // Handle saving edits
  const handleSaveEdits = () => {
    // Implement save logic here
    console.log({
      companyName,
      applicationDeadline,
      followUpDate,
      jobDescription,
    });
    // Placeholder for future backend integration
  };

  // Handle saving notes edits
  const handleSaveNotesEdits = () => {
    console.log({ notes });
    // Placeholder for future backend integration
  };

  // Handle saving contacts edits
  const handleSaveContactsEdits = () => {
    console.log({ contactName, position, phoneNumber, email });
    // Placeholder for future backend integration
  };

    // Function to handle deleting an application
    const handleDeleteApplication = () => {
      console.log('Delete application');
      // Placeholder for future backend integration
    };
  
    // Function to handle saving all edits
    const handleSaveAllEdits = () => {
      console.log('Save all edits');
      // Placeholder for future backend integration
    };

  /* ----------------------------- RENDER THE PAGE ---------------------------- */
  return (
    <div className="flex flex-col h-dvh">
      {/* Navbar */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-gray-500 rounded-full"></div>
          <span className="ml-2 text-xl font-semibold">Career Compass</span>
        </div>
        <Button className="bg-red-500 hover:bg-red-700">
          <Link to="/" className="text-white">Logout</Link>
        </Button>
      </div>

      {/* Title Bar */}
      <div className="bg-gray-200 p-6 text-center font-bold text-3xl">
        More Info
      </div>


      {/* Content Bar */}
      <div className="flex-grow container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 pb-24">
        {/* First Card */}
        <div className="bg-white shadow rounded p-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="applicationDeadline">
              Application Deadline
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="applicationDeadline"
              type="date"
              value={applicationDeadline}
              onChange={(e) => setApplicationDeadline(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="followUpDate">
              Follow-Up Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="followUpDate"
              type="date"
              value={followUpDate}
              onChange={(e) => setFollowUpDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobDescription">
              Job Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobDescription"
              rows="3"
              placeholder="Enter job description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            ></textarea>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-700" onClick={handleSaveEdits}>
            Save Edits
          </Button>
        </div>

        {/* Second Card for Attach Resume and Cover Letter */}
        <div className="bg-white shadow rounded p-4 flex flex-col items-center">
          {/* Attach Resume */}
          <div className="w-full mb-8">
            <h3 className="text-lg font-semibold mb-2 text-center">Attach Resume</h3>
            <div className="flex justify-center space-x-4">
              <Button className="bg-blue-500 hover:bg-blue-700">
                View
              </Button>
              <Button className="bg-green-500 hover:bg-green-700">
                Upload
              </Button>
            </div>
          </div>

          {/* Attach Cover Letter */}
          <div className='w-full'>
            <h3 className="text-lg font-semibold mb-2 text-center">Attach Cover Letter</h3>
            <div className="flex justify-center space-x-4">
              <Button className="bg-blue-500 hover:bg-blue-700">
                View
              </Button>
              <Button className="bg-green-500 hover:bg-green-700">
                Upload
              </Button>
            </div>
          </div>
        </div>

        {/* Third Card for Notes and Contacts */}
        <div className="bg-white shadow rounded p-4">
          {/* Notes Section */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
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
            <Button className="mt-4 bg-blue-500 hover:bg-blue-700" onClick={handleSaveNotesEdits}>
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSaveContactsEdits}>
              Save Edits
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="mt-auto bg-gray-100 p-4 fixed bottom-0 w-full flex justify-between items-center">
        <Button onClick={() => {}} >
          <Link to="/CurrentApps">Back</Link>
        </Button>
        <Button onClick={handleDeleteApplication} className="bg-red-500 hover:bg-red-700">
          Delete
        </Button>
        <Button onClick={handleSaveAllEdits} className="bg-blue-500 hover:bg-blue-700">
          Save All Edits
        </Button>
      </div>
    </div>
  );
}

export default MoreInfo;


// import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button.jsx";
// import "./global.css";

// function MoreInfo() {
//   return (
//     <>
//       <h1>More Info</h1>
//       <Button>
//         {" "}
//         <Link to="/CurrentApps">Home</Link>
//       </Button>
//       <Button>
//         {" "}
//         <Link to="/">Logout</Link>
//       </Button>
//     </>
//   );
// }

// export default MoreInfo;
