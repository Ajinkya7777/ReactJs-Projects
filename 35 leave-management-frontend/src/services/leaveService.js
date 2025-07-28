import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/leaves";

export const getMyLeaves = async () => {
  const token = localStorage.getItem("token");
  return axios.get(`${API_BASE_URL}/my-leaves`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//apply leave
export const applyLeave = async (leaveData) => {
  const token = localStorage.getItem("token");
  return axios.post("http://localhost:8080/api/leaves", leaveData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//get all leaves
export const getAllLeaves = async () => {
  const token = localStorage.getItem("token");
  return axios.get(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

//approve leave
export const approveLeave = async (leaveId, status) => {
  const token = localStorage.getItem("token");
  return axios.patch(
    `http://localhost:8080/api/leaves/${leaveId}/status?status=${status}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateLeaveStatus = (leaveId, newStatus) => {
  const token = localStorage.getItem("token");

  return axios.patch(
    `http://localhost:8080/api/leaves/${leaveId}/status?status=${newStatus}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
