<template v-slot:default>
  <v-card class="my-5 mx-auto" shaped>
    <v-card-title>
      <v-btn
        icon
        color="green lighten-1"
        :to="{ name: 'Travels-Car-Seats-Select' }"
      >
        <v-icon large>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-card-subtitle>Checkout</v-card-subtitle>
    </v-card-title>
    <v-card-subtitle>Look carefully</v-card-subtitle>

    <v-card class="py-3 mb-2" color="green lighten-3">
      <v-card-title class="subheading font-weight-bold">
        Travel
      </v-card-title>
      <v-divider></v-divider>
      <v-list color="green lighten-4">
        <v-list-item>
          <v-list-item-content>From :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ cities.from }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>To :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ cities.to }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-divider />
      <v-list color="green lighten-4">
        <v-list-item>
          <v-list-item-content>Start Time :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ time.start_time }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Reach Time :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ time.stop_time }}
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <v-divider />
      <v-list color="green lighten-4">
        <v-list-item>
          <v-list-item-content>
            {{ travel.start_city }}
            <sapn> {{ time.start_time }} </sapn>
          </v-list-item-content>
          <v-list-item-content class="align-end"> </v-list-item-content>
          <v-list-item-content>
            {{ travel.stop_city }}
            <span> {{ time.stop_time }} </span>
          </v-list-item-content>
          <v-list-item-content>
            {{ travel.medium_city }}
            <span> {{ time.medium_time }} </span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card class="py-3 mb-2" color="green lighten-3">
      <v-card-title class="subheading font-weight-bold">
        Gate
      </v-card-title>
      <v-divider></v-divider>
      <v-list color="green lighten-4">
        <v-list-item>
          <v-list-item-content>Gate name :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ gate.store_name }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Phone :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ gate.phone }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Address :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ gate.address }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card class="py-3 mb-2" color="green lighten-3">
      <v-card-title class="subheading font-weight-bold">
        Car
      </v-card-title>
      <v-divider></v-divider>
      <v-list color="green lighten-4">
        <v-list-item>
          <v-list-item-content>Car Number :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ car.car_no }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Car modal :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ car.car_modal }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>VIP :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ car.type ? "Yes" : "NO" }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Seat type :</v-list-item-content>
          <v-list-item-content class="align-end">
            {{ car.seat_type ? "1 row 5 seats" : "1 row 4 seats" }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>

    <v-card class="py-3 mb-2" color="green lighten-3">
      <v-card-title class="subheading font-weight-bold">
        Selected Seat
      </v-card-title>
      <v-divider></v-divider>
      <v-list color="green lighten-4">
        <v-list-item>
          <v-list-item-content>Number of seats :</v-list-item-content>
          <v-list-item-content class="align-end">
            <span v-for="(s, key) of seats" :key="key" class="numbers">
              {{ s }},
            </span>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Price per seat :</v-list-item-content>
          <v-list-item-content class="align-end">
            5000 MMK
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>Total :</v-list-item-content>
          <v-list-item-content class="align-end">
            <span>
              {{ seats.length * 5000 }} MMK
              <math>
                <mrow>
                  <mrow>
                    <msup>
                      <mi>{{ seats.length }}</mi>
                      <mn></mn>
                    </msup>
                    <mo>*</mo>
                    <msup>
                      <mi>5000 MMK</mi>
                      <mn></mn>
                    </msup>
                  </mrow>
                </mrow>
              </math>
            </span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card-actions>
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="grey lighten-1"
            class="pa-6 red--text"
            rounded
            v-bind="attrs"
            v-on="on"
          >
            Cancel Travel
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">
            Confirmation
          </v-card-title>
          <v-card-text>
            Are you sure want to cancel travel?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Disagree
            </v-btn>
            <v-btn color="green darken-1" text @click="cancel">
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-spacer />
      <BaseButton slot="button" @click="next">
        <template slot="label">Next</template>
        <template slot="right-icon">mdi-arrow-right-bold</template>
      </BaseButton>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapState } from "vuex";
import Storage from "@/utils/storage";

export default {
  name: "ChackOut",
  data() {
    return {
      dialog: false
    };
  },
  // beforeCreate() {
  //   this.$store.dispatch("checkout/pushInfo");
  // },
  computed: {
    ...mapState("checkout", [
      "cities",
      "travel",
      "time",
      "gate",
      "car",
      "seats"
    ])
  },
  methods: {
    next() {
      this.$router.push({ name: "Travels-Final" });
    },
    cancel() {
      this.dialog = false;
      Storage.removeItem("travel");
      this.$router.push({ name: "Main" });
    }
  }
};
</script>
<style scoped>
.numbers {
  all: unset;
}
math {
  color: rgba(0, 0, 0, 0.5);
  margin-left: 2em;
}
</style>
