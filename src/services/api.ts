import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escavador.com/api/v1/processos/1",
});

export default api;
