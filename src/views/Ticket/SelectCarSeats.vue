<template>
  <BaseFormCard :backBtn="true" backUrl="Travels-Gates-Select">
    <span slot="subTitle">Select Car seats</span>
    <v-row slot="body">
      <v-col cols="12" md="8" class="table-container">
        <table
          class="ml-3 pa-3"
          style="background-color: #C8E6C9"
          slot="body"
          width="100%"
        >
          <!-- <template v-slot:default> -->
          <tbody>
            <tr
              v-for="(item, index) in seatNumber"
              :key="index"
              class="text-center"
            >
              <td>
                <button
                  @click="bookSeat(item[0])"
                  :disabled="bookedSeats.includes(item[0])"
                  :class="{ chosen: temporaryBooked.includes(item[0]) }"
                >
                  <v-icon class="seat">mdi-car-seat</v-icon>
                  {{ item[0] }}
                </button>
              </td>
              <td>
                <button
                  @click="bookSeat(item[1])"
                  :disabled="bookedSeats.includes(item[1])"
                  :class="{ chosen: temporaryBooked.includes(item[1]) }"
                >
                  <v-icon class="seat">mdi-car-seat</v-icon>
                  {{ item[1] }}
                </button>
              </td>
              <td>
                <span v-if="car.seat_type || index === seatNumber.length - 1">
                  <button
                    @click="bookSeat(item[2])"
                    :disabled="bookedSeats.includes(item[2])"
                    :class="{ chosen: temporaryBooked.includes(item[2]) }"
                  >
                    <v-icon class="seat">mdi-car-seat</v-icon>
                    {{ item[2] }}
                  </button>
                </span>
                <v-spacer v-else />
              </td>
              <td>
                <button
                  @click="bookSeat(isLastRow(index, item[2], item[3]))"
                  :disabled="
                    bookedSeats.includes(isLastRow(index, item[2], item[3]))
                  "
                  :class="{
                    chosen: temporaryBooked.includes(
                      isLastRow(index, item[2], item[3])
                    )
                  }"
                >
                  <v-icon class="seat">mdi-car-seat</v-icon>
                  {{ isLastRow(index, item[2], item[3]) }}
                </button>
              </td>
              <td>
                <button
                  @click="bookSeat(isLastRow(index, item[3], item[4]))"
                  :disabled="
                    bookedSeats.includes(isLastRow(index, item[3], item[4]))
                  "
                  :class="{
                    chosen: temporaryBooked.includes(
                      isLastRow(index, item[3], item[4])
                    )
                  }"
                >
                  <v-icon class="seat">mdi-car-seat</v-icon>
                  {{ isLastRow(index, item[3], item[4]) }}
                </button>
              </td>
            </tr>
          </tbody>
          <!-- </template> -->
        </table>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mb-5">
          <v-card-title>
            Avaiable seats <v-spacer></v-spacer>
            <em>{{ car.seat - bookedSeats.length }} / {{ car.seat }}</em>
          </v-card-title>
          <v-card-subtitle class="text-right">
            Price: <em>5000 MMK</em> per seat
          </v-card-subtitle>
        </v-card>
        <v-card>
          <v-card-text>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>Seat's number :</v-list-item-content>
                <v-list-item-content class="align-end">
                  <span v-for="n in temporaryBooked" :key="n" class="numbers">
                    {{ n }},
                  </span>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Number of seats you selected :
                </v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ temporaryBooked.length }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-divider />
          <v-card-subtitle class="d-inline-flex">
            Car and Driver information
          </v-card-subtitle>
          <v-card-actions class="d-inline-flex float-right">
            <v-btn
              :to="{
                name: 'Car',
                params: { car_id: car.id }
              }"
              color="green lighten-2"
              >View</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <BaseButton slot="button" :disabled="nextDisable" @click="next">
      <template slot="label">Next</template>
      <template slot="right-icon">mdi-arrow-right-bold</template>
    </BaseButton>
  </BaseFormCard>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "SelectCarSeats",
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      seatNumber: [],
      bookedSeats: [1, 4, 17, 10, 11, 15, 20],
      temporaryBooked: [],
      nextDisable: true
    };
  },
  watch: {
    temporaryBooked(newValue) {
      this.nextDisable = newValue.length > 0 ? false : true;
    }
  },
  // computed: {
  //   ...mapState({
  //     car: state => state.car.car
  //   })
  // },
  methods: {
    showSeat() {
      let innerArray = [];
      for (let i = 1; i <= this.car.seat; i++) {
        if (this.car.seat_type) {
          if (innerArray.length < 5) {
            innerArray.push(i);
          }
          if (innerArray.length >= 5) {
            this.seatNumber.push(innerArray);
            innerArray = [];
          }
        } else {
          if (i === this.car.seat) {
            innerArray.push(i);
            this.seatNumber.push(innerArray);
            continue;
          }
          if (innerArray.length < 4) {
            innerArray.push(i);
            if (i === this.car.seat - 1) {
              continue;
            }
          }
          if (innerArray.length >= 4) {
            this.seatNumber.push(innerArray);
            innerArray = [];
          }
        }
      }
    },
    next() {
      this.$store.dispatch("car/pushSelectedSeats", this.temporaryBooked);
      this.$router.replace({
        name: "Travels-Checkout"
      });
    },
    bookSeat(number) {
      if (this.temporaryBooked.includes(number)) {
        this.temporaryBooked = this.temporaryBooked.filter(n => n !== number);
      } else {
        this.temporaryBooked.push(number);
      }
    },
    isLastRow(index, a, b) {
      return index === this.seatNumber.length - 1 || this.car.seat_type ? b : a;
    }
  },
  created() {
    this.showSeat();
  }
};
</script>
<style scoped>
.seat {
  font-size: 4em !important;
}
.table-container {
  overflow-y: auto;
}
.numbers {
  all: unset;
}
table {
  table-layout: auto;
}
/* td {
  width: 20%;
} */
button {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
button:hover {
  background-color: rgb(171, 226, 194);
  box-shadow: 5px 5px 5px rgb(97, 129, 97);
}
button:active {
  background-color: rgb(68, 82, 68);
}
button[disabled] {
  background-color: rgba(145, 145, 145, 0.4);
  box-shadow: 0px 0px 0px black;
}
.chosen {
  background-color: rgb(93, 201, 77);
  border: 1px solid green;
}
</style>
