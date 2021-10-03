<template>
  <BaseFormCard>
    <span slot="subTitle">Select Cities</span>
    <v-form slot="body" class="my-16">
      <v-subheader>Plaease first select "From" field.</v-subheader>
      <BaseSelectInput
        :items="cities"
        v-model="from"
        item-text="City_name"
        item-value="City_name"
        label="From"
        prepend-icon="mdi-city"
        @changeValue="toCities"
        :rules="rules"
      />
      <BaseSelectInput
        :items="to_cities"
        v-model="to"
        label="To"
        item-value="City_name"
        item-text="City_name"
        prepend-icon="mdi-city"
        :disabled="to_disable"
        :rules="rules"
      />
    </v-form>
    <BaseButton slot="button" :disabled="next_disable" @click="next()">
      <template slot="label">Next</template>
      <template slot="right-icon">mdi-arrow-right-bold</template>
    </BaseButton>
  </BaseFormCard>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SelectCities",
  data() {
    return {
      from: this.cities,
      to: "",
      to_disable: true,
      to_cities: null,
      next_disable: true,
      rules: [value => !!value || "Required field."]
    };
  },
  watch: {
    from(newValue) {
      if (!newValue) {
        this.to_disable = true;
      }
      this.nextAbled();
    },
    to() {
      this.nextAbled();
    }
  },
  methods: {
    toCities() {
      this.to_cities = this.cities.filter(item => item.City_name !== this.from);
      this.to_disable = false;
    },
    nextAbled() {
      if (this.from && this.to) {
        this.next_disable = false;
      } else {
        this.next_disable = true;
      }
    },
    next() {
      this.$store.dispatch("city/pushTravelCities", {
        from: this.from,
        to: this.to
      });
      this.$router.replace({
        name: "Travels-Select",
        params: { from: this.from, to: this.to }
      });
    }
  },
  computed: {
    ...mapState("city", ["cities"])
  }
};
</script>
<style scoped></style>
