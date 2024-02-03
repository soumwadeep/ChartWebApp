import { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const Table = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    {
      user: "Devon Lane",
      role: "Design Operation Lead",
      reportingManager: "Leslie Alexander",
      status: "Incomplete",
      skillScoreAverage: "32%",
      itemsComplete: "8/10 (80%)",
    },
    {
      user: "Esther Howard",
      role: "Visual Designer",
      reportingManager: "Dianne Russell",
      status: "Completed",
      skillScoreAverage: "32%",
      itemsComplete: "8/10 (80%)",
    },
    {
      user: "Guy Hawkins",
      role: "Design Lead",
      reportingManager: "Cameron Williamson",
      status: "On Track",
      skillScoreAverage: "32%",
      itemsComplete: "8/10 (80%)",
    },
    {
      user: "Ralph Edwards",
      role: "Product Analyst",
      reportingManager: "Esther Howard",
      status: "Completed",
      skillScoreAverage: "32%",
      itemsComplete: "8/10 (80%)",
    },
    {
      user: "Darlene Robertson",
      role: "Product Manager",
      reportingManager: "Darlene Robertson",
      status: "Lagging behind",
      skillScoreAverage: "32%",
      itemsComplete: "8/10 (80%)",
    },
    {
      user: "Brooklyn Simmons",
      role: "Senior Product Manager",
      reportingManager: "Eleanor Pena",
      status: "Completed",
      skillScoreAverage: "32%",
      itemsComplete: "8/10 (80%)",
    },
    {
      user: "Theresa Webb",
      role: "Content Writer",
      reportingManager: "Albert Flores",
      status: "On Track",
      skillScoreAverage: "32%",
      itemsComplete: "8/10 (80%)",
    },
    {
      user: "Robert Fox",
      role: "Data Analyst Lead",
      reportingManager: "Jane Cooper",
      status: "On Track",
      skillScoreAverage: "32%",
      itemsComplete: "8/10 (80%)",
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "user", headerName: "User" },
    { field: "role", headerName: "Role" },
    { field: "reportingManager", headerName: "Reporting Manager" },
    {
      field: "status",
      headerName: "Status",
      cellStyle: (params) => {
        switch (params.value) {
          case "Lagging behind":
            return {
              color: "#FFDE4D",
              background: "#FFFBEB",
              borderRadius: "30px",
            };
          case "Incomplete":
            return {
              color: "red",
              background: "#FDECF0",
              borderRadius: "30px",
            };
          case "Completed":
            return {
              color: "green",
              background: "#EBFFFB",
              borderRadius: "30px",
            };
          case "On Track":
            return {
              color: "#619BFF",
              background: "#EBF2FF",
              borderRadius: "30px",
            };
          default:
            return null;
        }
      },
    },
    { field: "skillScoreAverage", headerName: "Skill Score: Average" },
    { field: "itemsComplete", headerName: "Items Complete" },
  ]);

  return (
    <center>
      <div
        className="ag-theme-quartz"
        style={{ height: "40vh", width: "80vw" }}
      >
        <AgGridReact rowData={rowData} pagination={true} columnDefs={colDefs} />
      </div>
    </center>
  );
};

export default Table;
