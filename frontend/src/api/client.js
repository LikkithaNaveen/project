import axios from "axios";

const client = axios.create({ baseURL: "https://backendnodeday5task.onrender.com/api" });

export default client;
