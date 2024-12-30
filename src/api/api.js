import axios from "axios";

const api = axios.create({
  baseURL: "https://travel.digital-vision-solutions.com/api",
});

export default api;
