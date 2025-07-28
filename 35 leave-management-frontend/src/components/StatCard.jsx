import React from "react";

const StatCard = ({ icon, label, value, bg }) => {
  return (
    <div
      className={`flex items-center gap-4 p-6 rounded-xl shadow-lg text-white ${bg} hover:scale-105 transform hover:shadow-lg transition duration-300`}
    >
      <div className="text-white">{icon}</div>
      <div>
        <p className="text-lg">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
