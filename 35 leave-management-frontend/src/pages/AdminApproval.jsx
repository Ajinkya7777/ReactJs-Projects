import React, { useEffect, useState } from "react";
import { getAllLeaves, updateLeaveStatus } from "../services/leaveService";
import { toast } from "react-toastify";

const AdminApproval = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const res = await getAllLeaves();
      setLeaves(res.data);
    } catch (err) {
      console.error("Failed to fetch leave data", err);
    }
  };

  const handleAction = async (id, status) => {
    try {
      await updateLeaveStatus(id, status);
      toast.success(`Leave ${status.toLowerCase()} successfully!`);
      fetchLeaves(); // Refresh list
    } catch (err) {
      toast.error("Failed to update leave status");
      console.error(err);
    }
  };

  return (
    <div className="p-6 text-white bg-[#0e1625] min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Leave Approval Panel</h2>
      {/* <table className="w-full text-left bg-gray-800 rounded-lg">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-3">Employee</th>
            <th className="p-3">Leave Type</th>
            <th className="p-3">Dates</th>
            <th className="p-3">Reason</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.leaveId} className="border-t border-gray-700">
              <td className="p-3">{leave.employeeName}</td>
              <td className="p-3">{leave.leaveType}</td>
              <td className="p-3">
                {leave.startDate} to {leave.endDate}
              </td>
              <td className="p-3">{leave.reason}</td>
              <td className="p-3">{leave.leaveStatus}</td>
              <td className="p-3 space-x-2">
                {leave.leaveStatus === "PENDING" && (
                  <>
                    <button
                      className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                      onClick={() => handleAction(leave.leaveId, "APPROVED")}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                      onClick={() => handleAction(leave.leaveId, "REJECTED")}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table className="w-full text-left bg-gray-800 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-700 text-indigo-300 uppercase text-sm">
            <th className="p-3">Employee</th>
            <th className="p-3">Leave Type</th>
            <th className="p-3">Dates</th>
            <th className="p-3">Reason</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr
              key={leave.leaveId}
              className={`${
                index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
              } hover:bg-gray-700 transition-colors duration-200`}
            >
              <td className="p-3">{leave.employeeName}</td>
              <td className="p-3">{leave.leaveType}</td>
              <td className="p-3">
                {leave.startDate} to {leave.endDate}
              </td>
              <td className="p-3">{leave.reason}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    leave.leaveStatus === "APPROVED"
                      ? "bg-green-700 text-green-200"
                      : leave.leaveStatus === "REJECTED"
                      ? "bg-red-700 text-red-200"
                      : "bg-yellow-700 text-yellow-200"
                  }`}
                >
                  {leave.leaveStatus}
                </span>
              </td>
              <td className="p-3 space-x-2">
                {leave.leaveStatus === "PENDING" && (
                  <>
                    <button
                      className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-full text-sm font-medium shadow-md transition"
                      onClick={() => handleAction(leave.leaveId, "APPROVED")}
                    >
                      ✅ Approve
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-full text-sm font-medium shadow-md transition"
                      onClick={() => handleAction(leave.leaveId, "REJECTED")}
                    >
                      ❌ Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminApproval;
