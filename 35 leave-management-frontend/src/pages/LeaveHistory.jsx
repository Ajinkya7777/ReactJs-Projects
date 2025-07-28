// src/pages/LeaveHistory.jsx
import React, { useEffect, useState } from "react";
import { getMyLeaves } from "../services/leaveService";

const LeaveHistory = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    getMyLeaves()
      .then((res) => {
        setLeaves(res.data);
      })
      .catch((err) => {
        console.error("Error fetching leave history:", err);
      });
  }, []);

  return (
    <div className="p-6 text-white bg-[#0e1625] min-h-screen">
      <h2 className="text-2xl font-bold mb-4">My Leave History</h2>
      {leaves.length === 0 ? (
        <p>No leave history found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leaves.map((leave) => (
            <div
              key={leave.leaveId}
              className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg"
            >
              <p>
                <strong>Type:</strong> {leave.leaveType}
              </p>
              <p>
                <strong>Status:</strong> {leave.leaveStatus}
              </p>
              <p>
                <strong>From:</strong> {leave.startDate}
              </p>
              <p>
                <strong>To:</strong> {leave.endDate}
              </p>
              <p>
                <strong>Reason:</strong> {leave.reason}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeaveHistory;
