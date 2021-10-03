import PercaleService from "../../services/PercaleService";

export const namespaced = true;

export const state = {
  percale: null
};

export const mutations = {
  SET_PERCALE(state, item) {
    state.percale = item;
  }
};

export const actions = {
  fetchPercaleByCode({ commit }, code) {
    return PercaleService.getPercaleByCode(code)
      .then(res => {
        commit("SET_PERCALE", res.data);
        return res.data;
      })
      .catch(err => {
        console.error("hereError", err);
        //return err;
      });
  }
};
