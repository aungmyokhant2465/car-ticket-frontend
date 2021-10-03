<template>
  <BaseFormCard
    :back-btn="true"
    :back-params="{ from: from, to: to }"
    back-url="Travels-Select"
  >
    <!-- :back-url="from && to ? 'Travels-Select' : 'Main'" -->

    <span slot="subTitle">Select Travel Time</span>
    <v-simple-table slot="body" fixed-header height="250">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Select</th>
            <th class="text-left">
              Start Time
              <span class="green--text text--darken-4"
                >( {{ travel.start_city }} )</span
              >
            </th>
            <th class="text-left">
              Stop Time
              <span class="green--text text--darken-4"
                >( {{ travel.stop_city }} )</span
              >
            </th>
            <th class="text-left">
              Medium Time
              <span class="green--text text--darken-4"
                >( {{ travel.medium_city }} )</span
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            appear
            v-for="item in time"
            :key="item.id"
            @click="selectTime(item.id)"
          >
            <td>
              <input
                type="radio"
                v-model="selectedTime"
                :value="item.id"
                name="select"
              />
            </td>
            <td>{{ item.start_time }}</td>
            <td>{{ item.stop_time }}</td>
            <td>{{ item.medium_time }}</td>
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
  name: "SelectTime",
  props: {
    travel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedTime: null,
      next_disable: true
    };
  },
  watch: {
    selectedTime(new_value) {
      this.next_disable = new_value ? false : true;
    }
  },
  methods: {
    next() {
      this.$store.dispatch("travel/PushTime", this.selectedTime);
      this.$router.replace({ name: "Travels-Gates-Select" });
    },
    selectTime(item) {
      this.selectedTime = item;
    }
  },
  computed: {
    ...mapState({
      time: state => state.travel.time,
      from: state => state.city.from,
      to: state => state.city.to
    })
  }
};
</script>
<style scoped></style>
