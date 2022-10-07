import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escavador.com/api/v1/",
  headers: { Authorization: "Bearer " + process.env.API_TOKEN },
});

export default api;
