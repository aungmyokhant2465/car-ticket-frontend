<template>
  <div>
    <v-autocomplete
      :items="items"
      dense
      item-color="green lighten-2"
      outlined
      shaped
      class="ma-5"
      :label="label"
      color="green lighten-2"
      v-on="listeners"
      :value="value"
      v-bind="$attrs"
    ></v-autocomplete>
  </div>
</template>
<script>
export default {
  name: "BaseSelectInput",
  inheritAttrs: false,
  props: {
    items: {
      type: Array
    },
    label: [String],
    value: [String, Number]
  },
  methods: {
    changeValue(value) {
      this.$emit("input", value);
      this.$emit("changeValue", value);
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        change: this.changeValue
      };
    }
  }
};
</script>
