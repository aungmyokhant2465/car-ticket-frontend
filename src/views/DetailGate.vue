<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card color="green lighten-5" shaped class="mt-10">
          <v-card-title>
            <h3 class="green--text text--darken-4">Gates</h3>
          </v-card-title>
          <v-card-title>
            <v-btn
              v-if="from_gates"
              :to="{ name: 'Travels-Gates-Select' }"
              icon
              color="green lighten-1"
            >
              <v-icon large>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-card-subtitle class="text-right"
              >Gate Detial (Store)</v-card-subtitle
            >
          </v-card-title>
          <v-card-text>
            <v-img
              :src="image_url"
              max-height="233"
              max-width="250"
              class="my-5"
              alt="gate's image"
            >
            </v-img>
            <v-simple-table class="pa-5" height="250">
              <template v-slot:default>
                <tbody>
                  <tr>
                    <th scope="row">Store Name</th>
                    <td class="tt">{{ gate.store_name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Owner Name</th>
                    <td class="tt">{{ gate.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone</th>
                    <td class="tt">{{ gate.phone }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td class="tt">{{ gate.email }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address</th>
                    <td class="tt">
                      <address>{{ gate.address }}</address>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "DetailGate",
  props: {
    gate: {
      type: Object,
      required: true
    },
    from_gates: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      image_url: null
    };
  },
  mounted() {
    this.image_url = `http://carticket/api/images/${this.gate.image_name}`;
  }
};
</script>
<style scoped>
.tt {
  border-left: 1px solid #579229;
}
</style>
