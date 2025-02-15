import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URI = "/api/users/";

// Register User
const register = async (userData) => {
  console.log(API_URI);
  const response = await axios.post(API_URI, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
// Login User
const login = async (userData) => {
  console.log(API_URI);
  const response = await axios.post(API_URI + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
