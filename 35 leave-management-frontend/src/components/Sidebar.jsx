// import React from "react";
// import {
//   FaHome,
//   FaUsers,
//   FaCalendarAlt,
//   FaChartBar,
//   FaClipboardCheck,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-gray-900 text-white h-screen flex flex-col justify-between">
//       <div>
//         <div className="text-2xl font-bold p-6 pb-2 text-white">
//           Leave<span className="text-indigo-400">Manager</span>
//         </div>
//         <nav className="flex flex-col px-4 mt-6 space-y-2">
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
//                 isActive ? "bg-gray-700" : ""
//               }`
//             }
//           >
//             <FaHome className="mr-3" />
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/employees"
//             className={({ isActive }) =>
//               `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
//                 isActive ? "bg-gray-700" : ""
//               }`
//             }
//           >
//             <FaUsers className="mr-3" />
//             Employees
//           </NavLink>
//           <NavLink
//             to="/leave-history"
//             className={({ isActive }) =>
//               `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
//                 isActive ? "bg-gray-700" : ""
//               }`
//             }
//           >
//             <FaCalendarAlt className="mr-3" />
//             Leave Requests
//           </NavLink>
//           <NavLink
//             to="/reports"
//             className={({ isActive }) =>
//               `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
//                 isActive ? "bg-gray-700" : ""
//               }`
//             }
//           >
//             <FaChartBar className="mr-3" />
//             Reports
//           </NavLink>
//           <NavLink
//             to="/admin/approvals"
//             className={({ isActive }) =>
//               `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
//                 isActive ? "bg-gray-700" : ""
//               }`
//             }
//           >
//             <FaClipboardCheck className="mr-3" />
//             Leave Approvals
//           </NavLink>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaChartBar,
  FaClipboardCheck,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useRole } from "../hooks/useRole"; // ✅ NEW HOOK

const Sidebar = () => {
  const role = useRole(); // ✅ Get role from token

  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold p-6 pb-2 text-white">
          Leave<span className="text-indigo-400">Manager</span>
        </div>
        <nav className="flex flex-col px-4 mt-6 space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <FaHome className="mr-3" />
            Dashboard
          </NavLink>

          <NavLink
            to="/employees"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <FaUsers className="mr-3" />
            Employees
          </NavLink>

          <NavLink
            to="/leave-history"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <FaCalendarAlt className="mr-3" />
            Leave Requests
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <FaChartBar className="mr-3" />
            Reports
          </NavLink>

          {role === "ADMIN" && (
            <NavLink
              to="/admin/approvals"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaClipboardCheck className="mr-3" />
              Leave Approvals
            </NavLink>
          )}

          {role === "EMPLOYEE" && (
            <NavLink
              to="/apply-leave"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              <FaCalendarAlt className="mr-3" />
              Apply Leave
            </NavLink>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
