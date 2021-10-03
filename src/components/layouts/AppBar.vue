<template>
  <v-app-bar class="green" app fixed shaped>
    <v-toolbar-title>
      <!-- <v-img :src="require('./assets/gg.jpg')"></v-img> -->
      <v-avatar>
        <img :src="require('../../assets/gg.jpg')" alt="GG" />
      </v-avatar>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="(link, index) in links"
      :key="`${index}-app-bar`"
      rounded
      text
      :to="link.url"
    >
      {{ link.name }}
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: "AppBar",
  data() {
    return {
      links: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "Main",
          url: "/main"
        },
        {
          name: "Check Percale",
          url: "/percales/check"
        },
        {
          name: "About",
          url: "/about"
        }
      ]
    };
  }
};
</script>
