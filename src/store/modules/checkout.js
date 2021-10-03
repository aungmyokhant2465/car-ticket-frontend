import Storage from "@/utils/storage";
import Router from "@/router";
import TicketService from "@/services/TicketService";

export const namespaced = true;

export const state = {
  cities: null,
  travel: null,
  time: null,
  gate: null,
  car: null,
  seats: []
};

export const mutations = {
  SET_INFO(state, item) {
    state.cities = { from: item.from, to: item.to };
    state.travel = item.travel;
    state.time = item.selected_time;
    state.gate = item.gate;
    state.car = item.car;
    state.seats = item.selectedSeats;
  }
};

export const actions = {
  pushInfo({ commit, state }) {
    if (state.seats.length) {
      return;
    }
    const info = Storage.getItem(
      ["from", "to", "travel", "selected_time", "gate", "car", "selectedSeats"],
      "travel"
    );
    if (info === null || Object.values(info).includes(null)) {
      Router.push({ name: "Main" });
      return;
    } else {
      commit("SET_INFO", info);
    }
  },
  createCheckout({ state }, { total, date, name, email, phone, nrc }) {
    return TicketService.postCheckout({
      travel: state.travel.id,
      time: state.time.id,
      gate: state.gate.id,
      car: state.car.id,
      seat_no: state.seats.join(),
      total: total,
      date: date,
      from: state.cities.from,
      to: state.cities.to,
      name: name,
      email: email,
      phone: phone,
      nrc: nrc
    })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
