<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card color="green lighten-5" shaped class="mt-10">
          <v-card-title>
            <h3 class="green--text text--darken-4">Cars</h3>
          </v-card-title>
          <v-card-title>
            <v-btn
              :to="{ name: 'Travels-Car-Seats-Select' }"
              icon
              color="green lighten-1"
            >
              <v-icon large>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-card-subtitle class="text-right">Car Detial</v-card-subtitle>
          </v-card-title>
          <v-card-text>
            <v-img
              :src="image_url"
              max-height="233"
              max-width="250"
              class="my-5"
              alt="car's image"
            ></v-img>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>Car Number :</v-list-item-content>
                <v-list-item-content class="align-end">{{
                  car.car_no
                }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Modal :
                </v-list-item-content>
                <v-list-item-content class="align-end">
                  {{ car.car_modal }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Car Company :
                </v-list-item-content>
                <v-list-item-content class="align-end">{{
                  car.car_company
                }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Type :
                </v-list-item-content>
                <v-list-item-content class="align-end">{{
                  car.type ? "VIP" : "Normal"
                }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  State :
                </v-list-item-content>
                <v-list-item-content class="align-end">{{
                  car.state ? "fine" : "toubled"
                }}</v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  total seats :
                </v-list-item-content>
                <v-list-item-content class="align-end">{{
                  car.seat
                }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "DetailCar",
  props: {},
  data() {
    return {
      image_url: null
    };
  },
  computed: {
    ...mapState({
      car: state => state.car.car
    })
  },
  mounted() {
    this.image_url = `http://carticket/api/images/${this.car.car_photo_name}`;
  }
};
</script>
<style scoped></style>
