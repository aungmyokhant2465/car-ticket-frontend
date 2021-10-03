<template>
  <div>
    <v-btn
      v-on="$listeners"
      v-bind="$attrs"
      color="green lighten-1"
      class="pa-6"
      rounded
    >
      <v-icon>
        <slot name="left-icon"></slot>
      </v-icon>
      <slot name="label"></slot>
      <v-icon>
        <slot name="right-icon"></slot>
      </v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "BaseButton",
  inheritAttrs: false
};
</script>
