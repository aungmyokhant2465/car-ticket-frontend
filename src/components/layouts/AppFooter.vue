<template>
  <v-footer dark color="green darken-4" shaped>
    <v-card width="100%" flat tile class=" transparent white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        This Travel Company is one of the most popular in world. You can feel
        our love and kind on our customer. And You will definitely get your
        destination.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>GG Car Ticket</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "AppFooter",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
