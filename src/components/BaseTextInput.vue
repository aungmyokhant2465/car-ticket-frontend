<template>
  <div>
    <v-text-field
      class="ma-5"
      dense
      color="green lighten-2"
      outlined
      shaped
      v-bind="$attrs"
      v-on="listeners"
      :value="value"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseTextInput",
  props: {
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
