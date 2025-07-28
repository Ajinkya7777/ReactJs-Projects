import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiLogOut } from "react-icons/fi"; // Optional: logout icon

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("✅ Logged out successfully");
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-red-400"
    >
      <FiLogOut className="text-lg" />
      Logout
    </button>
  );
};

export default LogoutButton;
