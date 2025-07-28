import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ApplyLeaveForm = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    reason: "",
    leaveType: "SICK",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.startDate > formData.endDate) {
      toast.error("Start date cannot be after end date.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in to apply for leave.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Step 1: Fetch current employee
      const userRes = await axios.get(
        "http://localhost:8080/api/employees/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const employeeId = userRes.data.id;

      // Step 2: Prepare payload
      const payload = {
        employeeId,
        startDate: formData.startDate,
        endDate: formData.endDate,
        reason: formData.reason,
        leaveType: formData.leaveType,
      };

      // Step 3: Submit leave request
      await axios.post("http://localhost:8080/api/leaves", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Leave request submitted!");
      setFormData({
        startDate: "",
        endDate: "",
        reason: "",
        leaveType: "SICK",
      });
    } catch (error) {
      console.error("Leave request failed:", error);
      toast.error("Failed to submit leave request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0e1625] min-h-screen text-white p-8">
      <h2 className="text-3xl font-bold mb-6">Apply for Leave</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg space-y-6 shadow-md max-w-lg mx-auto"
      >
        <div>
          <label className="block mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
          />
        </div>

        <div>
          <label className="block mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Leave Type</label>
          <select
            name="leaveType"
            value={formData.leaveType}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
          >
            <option value="SICK">Sick</option>
            <option value="CASUAL">Casual</option>
            <option value="VACATION">Vacation</option>
            <option value="UNPAID">Unpaid</option>
            <option value="MATERNITY">Maternity</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Reason</label>
          <textarea
            name="reason"
            rows="4"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600"
            placeholder="Brief description..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded text-white font-bold ${
            isSubmitting
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-700"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ApplyLeaveForm;
