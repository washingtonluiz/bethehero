import axios from "axios";

//Colocar ip da maquina rodando o backend e colocoar a porta
const api = axios.create({
  baseURL: "http://192.168.1.6:3333"
});

export default api;
