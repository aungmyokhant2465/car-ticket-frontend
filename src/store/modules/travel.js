import TicketService from "../../services/TicketService";
import Storage from "@/utils/storage";

export const namespaced = true;

export const state = {
  travels: [],
  time: [],
  travel: null,
  selected_time: null
};

export const mutations = {
  SET_TRAVELS(state, items) {
    state.travels = items;
  },
  SET_TRAVEL_TIME(state, items) {
    state.time = items;
  },
  SET_TRAVEL(state, item) {
    Storage.pushItem({ travel: item }, "travel");
    state.travel = item;
  },
  SET_SELECTED_TIME(state, item) {
    Storage.pushItem({ selected_time: item }, "travel");
    state.selected_time = item;
  }
};

export const actions = {
  fetchTravelsByCities({ commit }, { from, to }) {
    return TicketService.getTravelsByCities(from, to)
      .then(response => {
        commit("SET_TRAVELS", response.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  fetchTravelTime({ commit }, id) {
    return TicketService.getTravelTime(id)
      .then(response => {
        commit("SET_TRAVEL_TIME", response.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  PushTravel({ commit }, travel) {
    commit("SET_TRAVEL", travel);
  },

  PushTime({ commit, getters }, time_id) {
    let time = getters.getTimeById(time_id);
    commit("SET_SELECTED_TIME", time);
  }
};

export const getters = {
  getTimeById: state => id => {
    return state.time.find(t => t.id === id);
  }
};
