import Vue from "vue";
import Vuex from "vuex";
import * as city from "./modules/city.js";
import * as travel from "./modules/travel.js";
import * as gate from "./modules/gate.js";
import * as car from "./modules/car.js";
import * as checkout from "./modules/checkout";
import * as percale from "./modules/percale";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { city, travel, gate, car, checkout, percale }
});
