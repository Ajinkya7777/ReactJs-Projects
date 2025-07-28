import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ApplyLeaveForm from "./components/ApplyLeaveForm";
import LeaveHistory from "./pages/LeaveHistory";
import AdminApprovals from "./pages/AdminApproval";
import Reports from "./pages/Reports";
import EmployeePage from "./pages/EmployeePage";
import Unauthorized from "./pages/UnAuthorized";
import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["ADMIN", "EMPLOYEE"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/apply-leave"
          element={
            <ProtectedRoute allowedRoles={["ADMIN", "EMPLOYEE"]}>
              <ApplyLeaveForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leave-history"
          element={
            <ProtectedRoute allowedRoles={["ADMIN", "EMPLOYEE"]}>
              <LeaveHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/approvals"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminApprovals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employees"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <EmployeePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>

      {/* ✅ Always render ToastContainer at root level */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
