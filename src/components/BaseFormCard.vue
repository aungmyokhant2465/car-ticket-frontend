<template>
  <v-card class="my-5 mx-auto" shaped>
    <!-- loading="green lighten-1" -->
    <v-card-title class="mb-5">
      <v-btn v-if="backBtn" @click="backward" icon color="green lighten-1">
        <v-icon large>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-card-subtitle><slot name="subTitle"></slot></v-card-subtitle>
    </v-card-title>
    <slot name="body"></slot>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="button"></slot>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "BaseFormCard",
  props: {
    backBtn: {
      type: Boolean,
      default: false
    },
    backUrl: {
      type: String,
      default: "Main"
    },
    backParams: {
      type: Object,
      default: null
    }
  },
  methods: {
    backward() {
      if (this.backParams) {
        this.$router.replace({ name: this.backUrl, params: this.backParams });
      } else {
        this.$router.replace({ name: this.backUrl });
      }
    }
  }
};
</script>
<style scoped>
.card_body {
  min-height: 500px;
}
</style>
