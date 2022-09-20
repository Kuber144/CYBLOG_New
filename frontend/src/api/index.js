import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8000" });

export const api = {
  login: (email, password) => API.post("/auth/login", { email, password }),
  signup: (email, password) => API.post("/auth/signup", { email, password }),
  getAllUsers: (params) => API.get("/users/users", { params }),
  getAllMessages: (params) => API.get("/messages", { params }),
  postMessage: (message) => API.put("/messages", { message }),
};
