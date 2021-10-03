import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import CheckPercale from "../views/CheckPercale.vue";
import Storage from "../utils/storage";

import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/main",
    component: Main,
    children: [
      {
        path: "",
        name: "Main",
        component: () =>
          import(/* webpackPrefetch: true */ "../views/Ticket/SelectCities"),
        beforeEnter(routeTo, routeFrom, next) {
          store
            .dispatch("city/fetchCities")
            .then(() => {
              next();
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      {
        path: "/travels/select",
        name: "Travels-Select",
        component: () => import("../views/Ticket/SelectTravels"),
        beforeEnter(routeTo, routeFrom, next) {
          let cities = Storage.getItem(["from", "to"], "travel");
          if (cities) {
            store
              .dispatch("travel/fetchTravelsByCities", {
                from: cities.from,
                to: cities.to
              })
              .then(() => {
                next();
              });
          } else {
            next({ name: "Main" });
          }
        }
      },
      {
        path: "/travels/time/select/:id",
        name: "Travels-Time-Select",
        component: () => import("../views/Ticket/SelectTime"),
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          let travel = Storage.getItem(["travel"], "travel");
          if (travel) {
            store
              .dispatch("travel/fetchTravelTime", routeTo.params.id)
              .then(() => {
                // if (!routeTo.params.travel) {
                //   next({ name: "Main" });
                // }
                //store.dispatch("travel/PushTravel", routeTo.params.travel);
                routeTo.params.travel = travel.travel;
                next();
              });
          } else {
            next({ name: "Travels-Select" });
          }
        }
      },
      {
        path: "/travels/gates/select",
        name: "Travels-Gates-Select",
        component: () => import("../views/Ticket/SelectGates"),
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          let old = Storage.getItem(
            ["selected_time", "travel", "from", "to"],
            "travel"
          );
          if (old.selected_time) {
            store
              .dispatch("gate/fetchGates", { from: old.from, to: old.to })
              .then(() => {
                // if (!store.state.travel.travel) {
                //   next({ name: "Main" });
                // }
                routeTo.params.travel = old.travel;
                next();
              })
              .catch(err => {
                console.error(err);
              });
          } else {
            next({ name: "Travels-Time-Select" });
          }
        }
      },
      {
        path: "/travels/cars/select",
        name: "Travels-Car-Seats-Select",
        component: () => import("../views/Ticket/SelectCarSeats"),
        props: true,
        beforeEnter(routeTo, routeFrom, next) {
          let old = Storage.getItem(["selected_time"], "travel");
          store
            // .dispatch("car/fetchCar", store.state.travel.selected_time.car_id)
            .dispatch("car/fetchCar", old.selected_time.car_id)
            .then(car => {
              // if (!store.state.travel.travel) {
              //   next({ name: "Main" });
              routeTo.params.car = car;
              // }
              next();
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
      {
        path: "/travels/checkout",
        name: "Travels-Checkout",
        component: () => import("../views/Ticket/CheckOut"),
        beforeEnter(routTo, routeFrom, next) {
          store.dispatch("checkout/pushInfo").then(() => {
            next();
          });
        }
      },
      {
        path: "travels/final",
        name: "Travels-Final",
        component: () => import("../views/Ticket/Final"),
        beforeEnter(routTo, routeFrom, next) {
          store.dispatch("checkout/pushInfo").then(() => {
            next();
          });
        }
      }
    ]
  },
  {
    path: "/gates/:id",
    name: "Gate",
    props: true,
    component: () => import("../views/DetailGate.vue"),
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch("gate/fetchGate", routeTo.params.id).then(res => {
        routeTo.params.gate = res;
        next();
      });
    }
  },
  {
    path: "/cars/:car_id",
    name: "Car",
    component: () => import("../views/DetailCar"),
    beforeEnter(routeTo, routeFrom, next) {
      if (Object.keys(store.state.car.car).length !== 0) {
        next();
        return;
      }
      store
        .dispatch("car/fetchCar", routeTo.params.car_id)
        .then(() => {
          // if (!store.state.travel.travel) {
          //   next({ name: "Main" });
          // }
          next();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  {
    path: "/percales/check",
    name: "Percales-Check",
    component: CheckPercale
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
