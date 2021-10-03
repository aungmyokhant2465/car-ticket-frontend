import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://carticket/api/percale`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    //"Access-Control-Allow-Origin": "*"
  },
  timeout: 10000
});

export default {
  getPercaleByCode(code) {
    return apiClient.get(`/${code}`);
  }
};
