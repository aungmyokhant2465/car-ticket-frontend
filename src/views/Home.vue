<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          Home page
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      dialog: false
    };
  },
  components: {
    // HelloWorld
  }
};
</script>

<style scoped></style>
