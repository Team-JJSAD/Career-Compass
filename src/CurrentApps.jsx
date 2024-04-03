import { Link } from "react-router-dom";
import axiosInstance from "./axiosInstance";
import { Button } from "../components/ui/button.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.jsx";
import { Input } from "../components/ui/input.jsx";
import { useState, useEffect } from "react";
import "./global.css";
import compassIcon from '../assets/compass_icon.png';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"


function CurrentApps() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/applications");
        setData(response.data);
        console.log('Data from backend: ', response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const statusOptions = [
    "Waiting for response",
    "Phone Screen",
    "Behavioral Interview",
    "Technical Interview #1",
    "Technical Interview #2",
    "Technical Interview #3",
    "Final Interview",
  ];

  // // TESTING - MOCK DATA
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     company: "Acme Inc.",
  //     appDate: "2023-06-01",
  //     followUpDate: "2023-06-10",
  //     resume: true,
  //     coverLetter: false,
  //     applyType: true,
  //     moreInfo: "Additional info for Acme Inc.",
  //   },
  //   {
  //     id: 2,
  //     company: "Beta Corp.",
  //     appDate: "2023-06-05",
  //     followUpDate: "2023-06-15",
  //     resume: true,
  //     coverLetter: true,
  //     applyType: false,
  //     moreInfo: "Additional info for Beta Corp.",
  //   },
  //   {
  //     id: 3,
  //     company: "Gamma LLC",
  //     appDate: "2023-06-10",
  //     followUpDate: "2023-06-20",
  //     resume: false,
  //     coverLetter: true,
  //     applyType: true,
  //     moreInfo: "Additional info for Gamma LLC",
  //   },
  // ]);
//   appdate
// : 
// "2024-04-03"
// applicationid
// : 
// 2
// companyname
// : 
// "JJSAD Corp."
// contact
// : 
// ""
// followupdate
// : 
// "2024-04-10"
// jobdescription
// : 
// "asdasd"
// notes
// : 
// "asdasd"
// userid
// : 
// null

  const columns = [
    {
      accessorKey: "companyname",
      header: "Company/Name",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      ),
    },
    {
      accessorKey: "appdate",
      header: "App Date",
    },
    {
      accessorKey: "followupdate",
      header: "Follow Up Date",
    },
    {
      accessorKey: "resume",
      header: "Resume",
      cell: ({ row }) => (row.resume ? "Yes" : "No"),
    },
    {
      accessorKey: "coverLetter",
      header: "Cover Letter",
      cell: ({ row }) => (row.coverLetter ? "Yes" : "No"),
    },
    {
      accessorKey: "applyType",
      header: "Quick Apply?",
      cell: ({ row }) => (row.applyType ? "Yes" : "No"),
    },
    {
      accessorKey: "moreInfo",
      header: "More Info",
      cell: ({ row }) => (
        <Button>
          <Link to={`/MoreInfo/`} className="text-white">
            More Info
          </Link>
        </Button>
      ),
    },
  ];

  const filteredData = data.filter((app) =>
    app.companyname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Nav Bar */}
      <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
    <div className="flex items-center">
      {/* Apply style directly to the img element */}
      <img src={compassIcon} alt="Compass Icon" style={{ width: '60px', height: '60px' }} />
      <h1 className="text-2xl font-bold text-white ml-2">Career Compass</h1>
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

      {/* Add application and search application */}
      <div className="mb-4 mt-8 flex items-center justify-between">
        <Button className="ml-16">
          <Link to="/AddApp">Add Application</Link>
        </Button>
        <Input
          className="w-2/5 mx-auto"
          type="text"
          placeholder="Search applications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table of applications */}
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.accessorKey} className="text-center">
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell
                  key={column.accessorKey}
                  // Apply the custom styles conditionally
                  className={`text-center ${
                    column.accessorKey === "company"
                      ? "font-semibold text-lg"
                      : ""
                  }`}
                >
                  {column.cell ? column.cell({ row }) : row[column.accessorKey]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <footer className="fixed inset-x0 bottom-0">
        hello
      </footer>
    </>
  );
}

export default CurrentApps;
