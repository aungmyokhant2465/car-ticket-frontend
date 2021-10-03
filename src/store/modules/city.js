import TicketService from "@/services/TicketService";
import Storage from "@/utils/storage";
export const namespaced = true;

export const state = {
  cities: [],
  from: "",
  to: ""
};

export const mutations = {
  SET_CITIES(state, items) {
    state.cities = items;
  },
  SET_TRAVEL_CITIES(state, [from, to]) {
    Storage.pushItem({ from: from, to: to }, "travel");
    state.from = from;
    state.to = to;
  }
};

export const actions = {
  fetchCities({ commit, state }) {
    if (!state.cities.length) {
      return TicketService.getCities()
        .then(response => {
          commit("SET_CITIES", response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  pushTravelCities({ commit }, { from, to }) {
    commit("SET_TRAVEL_CITIES", [from, to]);
  }
};
