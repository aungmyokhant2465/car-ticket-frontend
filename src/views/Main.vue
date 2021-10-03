<template>
  <div class="main">
    <v-container>
      <v-row>
        <v-col>
          <v-card color="basil" shaped class="mt-10">
            <v-card-title class="text-center justify-center py-6">
              <h1 class="font-weight-bold basil--text">
                GG Car Ticket
              </h1>
            </v-card-title>
            <!-- <v-col cols="12" md="4">
              <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                grow
              >
                <v-spacer></v-spacer>
                <v-tab :to="{ name: 'Main' }">Buy Ticket</v-tab>
                <v-tab :to="{ name: 'Percales-Check' }">Check Percale</v-tab>
              </v-tabs>
            </v-col> -->
            <transition name="slide-fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Main",
  data() {
    return {
      tab: "options"
    };
  }
};
</script>

<style scoped>
.main {
  background-image: url("../assets/pexels-lorenzo-240834.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
  background-size: contain;
  min-height: 80vh;
}
.basil {
  background-color: #e8f5e9 !important;
}
.basil--text {
  color: #356859 !important;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
