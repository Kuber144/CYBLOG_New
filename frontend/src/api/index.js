import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8000" });

export const api = {
  login: (email, password) => API.post("/auth/login", { email, password }),
  signup: (email, password) => API.post("/auth/signup", { email, password }),
  getSelf: (params) => API.get("/users/user", { params }),
  getAllUsers: (params) => API.get("/users/users", { params }),
  getAllMessages: (params) => API.get("/messages", { params }),
  postMessage: (message) => API.put("/messages", { message }),
  updateUser: (newOb, params) =>
    API.put("/users/user", { formData: newOb }, { params }),
};
