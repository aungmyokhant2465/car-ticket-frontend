<template>
  <BaseFormCard :back-btn="true" back-url="Main">
    <span slot="subTitle">Select Travel</span>
    <v-simple-table slot="body" fixed-header height="250">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Select</th>
            <th class="text-left">Start City</th>
            <th class="text-left">Stop City</th>
            <th class="text-left">Medium City</th>
          </tr>
        </thead>
        <tbody>
          <tr
            appear
            v-for="item in travels"
            :key="item.id"
            @click="selectTravel(item.id)"
          >
            <td>
              <input
                type="radio"
                v-model="selectedTravel"
                :value="item.id"
                name="select"
              />
            </td>
            <td>{{ item.start_city }}</td>
            <td>{{ item.stop_city }}</td>
            <td>{{ item.medium_city }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <BaseButton slot="button" :disabled="next_disable" @click="next()">
      <template slot="label">Next</template>
      <template slot="right-icon">mdi-arrow-right-bold</template>
    </BaseButton>
  </BaseFormCard>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SelectTravels",
  data() {
    return {
      selectedTravel: null,
      next_disable: true
    };
  },
  watch: {
    selectedTravel(new_value) {
      this.next_disable = new_value ? false : true;
    }
  },
  methods: {
    next() {
      if (this.selectedTravel) {
        let travel = this.travels.find(item => item.id === this.selectedTravel);
        this.$store.dispatch("travel/PushTravel", travel);
        this.$router.replace({
          name: "Travels-Time-Select",
          params: {
            id: this.selectedTravel,
            travel: travel
          }
        });
      }
    },
    selectTravel(item) {
      this.selectedTravel = item;
    }
  },
  computed: {
    ...mapState({
      travels: state => state.travel.travels
    })
  }
};
</script>
<style scoped></style>
