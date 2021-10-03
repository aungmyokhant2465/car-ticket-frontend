import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://carticket/api`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    //"Access-Control-Allow-Origin": "*"
  },
  timeout: 10000
});

export default {
  getCities() {
    return apiClient.get("/cities");
  },
  getTravelsByCities(from, to) {
    return apiClient.get(`/travels/by/${from}/and/${to}`);
  },
  getTravelTime(id) {
    return apiClient.get(`/travels/time/${id}`);
  },
  getTravel(id) {
    return apiClient.get(`/travels/${id}`);
  },
  getGates(from, to) {
    return apiClient.post(`/users/brief`, {
      start_city: from,
      stop_city: to
    });
  },
  getGate(id) {
    return apiClient.get(`/users/${id}`);
  },
  getCar(id) {
    return apiClient.get(`/cars/${id}`);
  },
  postCheckout(info) {
    return apiClient.post(`/travels/reports`, info);
  }
};
