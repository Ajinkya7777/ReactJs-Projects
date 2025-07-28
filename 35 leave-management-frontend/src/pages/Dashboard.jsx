import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaClipboardList,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:8080/api/dashboard/summary",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSummary(res.data);
      } catch (error) {
        console.error("Failed to fetch summary", error);
      }
    };

    fetchSummary();
  }, []);

  if (!summary) return <div className="text-white p-6">Loading...</div>;

  const stats = [
    {
      label: "Total Employees",
      value: summary.totalEmployees,
      icon: <FaUsers size={30} />,
      bg: "bg-indigo-600",
    },
    {
      label: "Total Leave Requests",
      value: summary.totalLeaveRequests,
      icon: <FaClipboardList size={30} />,
      bg: "bg-yellow-600",
    },
    {
      label: "Approved Leaves",
      value: summary.leavesByStatus.APPROVED,
      icon: <FaCheckCircle size={30} />,
      bg: "bg-green-600",
    },
    {
      label: "Pending Leaves",
      value: summary.leavesByStatus.PENDING,
      icon: <FaClock size={30} />,
      bg: "bg-blue-600",
    },
    {
      label: "Rejected Leaves",
      value: summary.leavesByStatus.REJECTED,
      icon: <FaClipboardList size={30} />,
      bg: "bg-red-600",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-grow bg-[#0e1625] min-h-screen">
        <Topbar />
        <main className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                bg={stat.bg}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
