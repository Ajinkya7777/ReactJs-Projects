import React from "react";
import axios from "axios";

const Reports = () => {
  const token = localStorage.getItem("token");

  const downloadReport = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/leaves/report",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "leave_report.xlsx");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download report");
    }
  };

  const emailReport = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/leaves/report/email",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data); // e.g., "Email sent successfully"
    } catch (error) {
      console.error("Email failed", error);
      alert("Failed to send report via email");
    }
  };

  return (
    <div className="p-8 min-h-screen bg-[#0e1625]">
      <h2 className="text-2xl font-bold mb-4">Leave Reports</h2>
      <div className="flex gap-4">
        <button
          onClick={downloadReport}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Download Report
        </button>
        <button
          onClick={emailReport}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Email Report
        </button>
      </div>
    </div>
  );
};

export default Reports;
