import TicketService from "../../services/TicketService";
import Storage from "@/utils/storage";

export const namespaced = true;

export const state = {
  car: null,
  selectedSeats: []
};

export const mutations = {
  SET_CAR(state, item) {
    Storage.pushItem({ car: item }, "travel");
    state.car = item;
  },
  SET_SELECTEDSEATS(state, items) {
    Storage.pushItem({ selectedSeats: items }, "travel");
    state.selectedSeats = items;
  }
};

export const actions = {
  fetchCar({ commit }, id) {
    return TicketService.getCar(id)
      .then(res => {
        commit("SET_CAR", res.data);
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
  pushSelectedSeats({ commit }, seats) {
    commit("SET_SELECTEDSEATS", seats);
  }
};
