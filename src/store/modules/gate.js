import TicketService from "../../services/TicketService";
import Storage from "@/utils/storage";

export const namespaced = true;

export const state = {
  gates: [],
  gate: null
};

export const mutations = {
  SET_GATES(state, items) {
    state.gates = items;
  },
  SET_GATE(state, item) {
    Storage.pushItem({ gate: item }, "travel");
    state.gate = item;
  }
};

export const actions = {
  fetchGates({ commit }, city) {
    // TicketService.getGates(rootState.city.from, rootState.city.to)
    TicketService.getGates(city.from, city.to)
      .then(res => {
        commit("SET_GATES", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  },
  fetchGate({ getters }, id) {
    let gate = getters.getGateById(id);
    if (gate) {
      return gate;
    } else {
      return TicketService.getGate(id)
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  pushGate({ getters, commit }, id) {
    let gate = getters.getGateById(id);
    commit("SET_GATE", gate);
  }
};

export const getters = {
  getGateById: state => id => {
    return state.gates.find(g => g.id === id);
  }
};
