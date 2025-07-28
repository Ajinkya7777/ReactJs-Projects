import { useCallback, useEffect, useState } from "react";
import { getEmployees, createEmployee } from "../services/employeeService";
import {
  getDepartments,
  createDepartment,
} from "../services/departmentService";
import { toast } from "react-toastify";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  CircularProgress,
  Pagination,
  Typography,
  Box,
  Button,
  Modal,
} from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1f2937", // Tailwind's gray-800
  color: "#fff",
  padding: "2rem",
  borderRadius: "8px",
  width: "90%",
  maxWidth: "400px",
};

const EmployeePage = () => {
  // Employee states
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Employee form modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "EMPLOYEE",
    departmentId: "",
  });

  // Department modal states
  const [deptModalOpen, setDeptModalOpen] = useState(false);
  const [newDeptName, setNewDeptName] = useState("");
  const [deptFormError, setDeptFormError] = useState("");

  // Load employees (paginated)
  const loadEmployees = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getEmployees(page, 5);
      setEmployees(response.data.content);
      setTotalPages(response.data.totalPages);
      setError("");
    } catch (err) {
      console.error("Failed to fetch employees:", err);
      setError("Failed to load employees.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  // Load departments list
  const loadDepartments = async () => {
    try {
      const res = await getDepartments();
      setDepartments(res.data);
    } catch (err) {
      console.error("Failed to load departments", err);
    }
  };

  // Load data on mount & page change
  useEffect(() => {
    loadEmployees();
    loadDepartments();
  }, [loadEmployees]);

  // Pagination handler
  const handlePageChange = (event, value) => {
    setPage(value - 1);
  };

  // Employee form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Create employee
  const handleCreateEmployee = async () => {
    const { name, email, password, role, departmentId } = form;

    if (!name || !email || !password || !role || !departmentId) {
      setFormError("All fields are required.");
      return;
    }

    try {
      await createEmployee({ name, email, password, role, departmentId });
      toast.success("Employee created successfully!"); // <-- Add toast here
      setModalOpen(false);
      setForm({
        name: "",
        email: "",
        password: "",
        role: "EMPLOYEE",
        departmentId: "",
      });
      setFormError("");
      loadEmployees();
    } catch (err) {
      console.error("Failed to create employee", err);
      setFormError("Error creating employee.");
    }
  };

  // Department name input change
  const handleDeptNameChange = (e) => {
    setNewDeptName(e.target.value);
    setDeptFormError("");
  };

  // Create department
  const handleCreateDepartment = async () => {
    if (!newDeptName.trim()) {
      setDeptFormError("Department name is required.");
      return;
    }

    try {
      await createDepartment({ name: newDeptName.trim() });
      toast.success("Department created successfully!"); // <-- Add toast here
      setDeptModalOpen(false);
      setNewDeptName("");
      setDeptFormError("");
      loadDepartments(); // reload to update dropdown
    } catch (err) {
      console.error("Failed to create department", err);
      setDeptFormError("Failed to create department.");
    }
  };

  return (
    <Box className="p-6 bg-[#0e1625] min-h-screen text-white">
      <Box className="flex justify-between items-center mb-6">
        <Typography variant="h4">Employees</Typography>
        <Box>
          <Button
            variant="contained"
            onClick={() => setModalOpen(true)}
            sx={{
              background: "linear-gradient(45deg, #2563eb 30%, #60a5fa 90%)", // blue gradient
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "12px",
              padding: "10px 24px",
              boxShadow: "0 3px 5px 2px rgba(37, 99, 235, .3)",
              "&:hover": {
                background: "linear-gradient(45deg, #1d4ed8 30%, #3b82f6 90%)",
                boxShadow: "0 6px 10px 4px rgba(29, 78, 216, .4)",
              },
            }}
          >
            Add Employee
          </Button>

          <Button
            variant="contained"
            onClick={() => setDeptModalOpen(true)}
            sx={{
              background: "linear-gradient(45deg, #b91c1c 30%, #f87171 90%)", // red gradient
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "12px",
              padding: "10px 24px",
              marginLeft: "1rem",
              boxShadow: "0 3px 5px 2px rgba(185, 28, 28, .3)",
              "&:hover": {
                background: "linear-gradient(45deg, #991b1b 30%, #ef4444 90%)",
                boxShadow: "0 6px 10px 4px rgba(153, 27, 27, .4)",
              },
            }}
          >
            Add Department
          </Button>
        </Box>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <>
          <TableContainer component={Paper} className="bg-gray-900 text-white">
            <Table
              sx={{
                "& td": {
                  color: "#a5b4fc", // text color
                  borderBottom: "1px solid #475569",
                  backgroundColor: "#1e293b", // a nice dark bluish-gray background for cells
                },
                "& tr": {
                  backgroundColor: "#1e293b", // same for rows to avoid white flash
                },
                "& tr:hover": {
                  backgroundColor: "#334155", // slightly lighter on hover for better UX
                },
                // Keep header cells white or customize if needed
                "& th": {
                  color: "#f8fafc", // light text for header
                  backgroundColor: "#0f172a", // dark background for header row
                  borderBottom: "2px solid #475569",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell className="text-white">ID</TableCell>
                  <TableCell className="text-white">Name</TableCell>
                  <TableCell className="text-white">Email</TableCell>
                  <TableCell className="text-white">Role</TableCell>
                  <TableCell className="text-white">Department</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.id}>
                    <TableCell>{emp.id}</TableCell>
                    <TableCell>{emp.name}</TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>{emp.role}</TableCell>
                    <TableCell>{emp.departmentName || "N/A"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box mt={2} display="flex" justifyContent="center">
            <Pagination
              count={totalPages}
              page={page + 1}
              onChange={handlePageChange}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#90caf9", // light blue text
                  backgroundColor: "#121f3d", // dark navy background
                  borderRadius: "12px", // rounded corners
                  minWidth: "36px",
                  height: "36px",
                  margin: "0 4px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#1976d2", // brighter blue on hover
                    color: "#fff",
                    boxShadow: "0 4px 10px rgba(25, 118, 210, 0.6)",
                  },
                },
                "& .MuiPaginationItem-page.Mui-selected": {
                  backgroundColor: "#1976d2", // solid blue for selected page
                  color: "#fff",
                  fontWeight: "bold",
                  boxShadow: "0 4px 12px rgba(25, 118, 210, 0.8)",
                  "&:hover": {
                    backgroundColor: "#115293", // darker blue when hovering selected
                  },
                },
                "& .MuiPaginationItem-previousNext": {
                  color: "#90caf9", // light blue arrows
                  backgroundColor: "#121f3d",
                  borderRadius: "50%", // round circle for arrows
                  minWidth: "40px",
                  height: "40px",
                  margin: "0 6px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    boxShadow: "0 4px 10px rgba(25, 118, 210, 0.6)",
                  },
                },
              }}
            />
          </Box>
        </>
      )}

      {/* Employee Creation Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>
            Create New Employee
          </Typography>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleInputChange}
            className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
            className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white"
          />
          <select
            name="role"
            value={form.role}
            onChange={handleInputChange}
            className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white"
          >
            <option value="EMPLOYEE">Employee</option>
            <option value="ADMIN">Admin</option>
          </select>
          <select
            name="departmentId"
            value={form.departmentId}
            onChange={handleInputChange}
            className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white"
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>

          {formError && (
            <Typography color="error" className="mb-3">
              {formError}
            </Typography>
          )}

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={handleCreateEmployee}
              sx={{
                background: "linear-gradient(45deg, #16a34a 30%, #4ade80 90%)",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "12px",
                padding: "10px 24px",
                boxShadow: "0 3px 5px 2px rgba(22, 163, 74, .3)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #15803d 30%, #22c55e 90%)",
                  boxShadow: "0 6px 10px 4px rgba(21, 128, 61, .4)",
                },
              }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Department Creation Modal */}
      <Modal open={deptModalOpen} onClose={() => setDeptModalOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" gutterBottom>
            Create New Department
          </Typography>
          <input
            type="text"
            placeholder="Department Name"
            value={newDeptName}
            onChange={handleDeptNameChange}
            className="w-full mb-3 px-3 py-2 rounded bg-gray-800 text-white"
          />
          {deptFormError && (
            <Typography color="error" className="mb-3">
              {deptFormError}
            </Typography>
          )}
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={handleCreateDepartment}
              sx={{
                background: "linear-gradient(45deg, #16a34a 30%, #4ade80 90%)",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "12px",
                padding: "10px 24px",
                boxShadow: "0 3px 5px 2px rgba(22, 163, 74, .3)",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #15803d 30%, #22c55e 90%)",
                  boxShadow: "0 6px 10px 4px rgba(21, 128, 61, .4)",
                },
              }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default EmployeePage;
