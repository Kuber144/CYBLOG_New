import axios from "axios";
const API = axios.create({ baseURL: "https://codevv.herokuapp.com" });
export const api = {
  login: (email, password) => API.post("/auth/login", { email, password }),
  signup: (email, password) => API.post("/auth/signup", { email, password }),
};
