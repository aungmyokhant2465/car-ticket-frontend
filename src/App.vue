<template>
  <v-app>
    <v-card class="overflow-hidden">
      <NavBar></NavBar>
      <div id="content">
        <v-main>
          <transition name="slide-fade" mode="out-in">
            <router-view />
          </transition>
        </v-main>
      </div>
      <Footer></Footer>
    </v-card>
  </v-app>
</template>

<script>
import Footer from "./components/layouts/AppFooter";
import NavBar from "./components/layouts/AppBar";
export default {
  name: "App",

  components: {
    Footer,
    NavBar
  }
};
</script>
<style scoped>
#content {
  min-height: 100vh;
}
.slide-fade-enter {
  transform: translateY(15px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>
