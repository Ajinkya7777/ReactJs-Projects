// import React from "react";

// const Topbar = ({ onLogout }) => {
//   return (
//     <div className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
//       <div></div> {/* Empty to balance space */}
//       <div className="flex items-center gap-4">
//         <span className="text-md">Welcome, Admin</span>
//         <button
//           onClick={onLogout}
//           className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

// src/components/Topbar.jsx
import React from "react";
import LogoutButton from "./LogoutButton";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
      <h1 className="text-xl font-bold">Leave Management System</h1>
      <LogoutButton />
    </div>
  );
};

export default Topbar;
