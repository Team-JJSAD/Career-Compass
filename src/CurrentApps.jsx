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

function CurrentApps() {
  // const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get("/api/applications");
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [data, setData] = useState([
    {
      id: 1,
      company: "Acme Inc.",
      appDate: "2023-06-01",
      followUpDate: "2023-06-10",
      resume: true,
      coverLetter: false,
      applyType: true,
      moreInfo: "Additional info for Acme Inc.",
    },
    {
      id: 2,
      company: "Beta Corp.",
      appDate: "2023-06-05",
      followUpDate: "2023-06-15",
      resume: true,
      coverLetter: true,
      applyType: false,
      moreInfo: "Additional info for Beta Corp.",
    },
    {
      id: 3,
      company: "Gamma LLC",
      appDate: "2023-06-10",
      followUpDate: "2023-06-20",
      resume: false,
      coverLetter: true,
      applyType: true,
      moreInfo: "Additional info for Gamma LLC",
    },
  ]);

  const columns = [
    {
      accessorKey: "company",
      header: "Company/Name",
    },
    {
      accessorKey: "appDate",
      header: "App Date",
    },
    {
      accessorKey: "followUpDate",
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
    app.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          className={`text-center ${column.accessorKey === 'company' ? 'font-semibold text-lg' : ''}`}
        >
          {column.cell ? column.cell({ row }) : row[column.accessorKey]}
        </TableCell>
      ))}
    </TableRow>
  ))}
</TableBody>
      </Table>
    </>
  );
}

export default CurrentApps;
