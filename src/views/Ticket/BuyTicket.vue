<template>
  <v-container id="buyTicket">
    <v-row>
      <v-col>
        <select-cities @next="importSelectTravels" />
        <template v-if="selectTravels">
          <select-travels />
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SelectCities from "./SelectCities.vue";

export default {
  name: "BuyTicket",
  components: {
    SelectCities,
    SelectTravels: () => import(/* webpackPrefetch: true */ "./SelectTravels")
  },
  data: () => ({
    selectTravels: false
  }),
  methods: {
    importSelectTravels() {
      this.selectTravels = true;
    }
  }
};
</script>
<style scoped>
#buyTicket {
  min-height: 60vh;
}
</style>
