<template>
  <BaseFormCard
    :backBtn="true"
    backUrl="Travels-Time-Select"
    :backParams="{ id: travel.id, travel: travel }"
  >
    <span slot="subTitle">Select Gates</span>
    <v-simple-table slot="body" fixed-header height="250">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Select</th>
            <th class="text-left">Store Name</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in gates" :key="item.id" @click="selectGate(item.id)">
            <td>
              <input
                type="radio"
                v-model="selectedGate"
                :value="item.id"
                name="select"
              />
            </td>
            <td>{{ item.store_name }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <v-btn icon class="green lighten-5" @click="detail(item)"
                ><v-icon>mdi-account-details</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <BaseButton slot="button" :disabled="nextDisable" @click="next">
      <template slot="label">Next</template>
      <template slot="right-icon">mdi-arrow-right-bold</template>
    </BaseButton>
  </BaseFormCard>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SelectGates",
  props: {
    travel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedGate: null,
      nextDisable: true
    };
  },
  watch: {
    selectedGate(newValue) {
      this.nextDisable = newValue ? false : true;
    }
  },
  methods: {
    next() {
      this.$store.dispatch("gate/pushGate", this.selectedGate);
      this.$router.replace({
        name: "Travels-Car-Seats-Select"
      });
    },
    selectGate(item) {
      this.selectedGate = item;
    },
    detail(item) {
      this.$router.replace({
        name: "Gate",
        params: { id: item.id, from_gates: true }
      });
    }
  },
  computed: {
    ...mapState({
      // travel: state => state.travel.travel,
      gates: state => state.gate.gates
    })
  }
};
</script>
<style scoped></style>
