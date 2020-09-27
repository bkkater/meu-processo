import axios from "axios";

const api = axios.create({
  baseURL: 'https://api-hackaton-juridico.herokuapp.com/api/'
});

export default api