<template>
  <div>
    <BaseFormCard :backBtn="true" backUrl="Travels-Checkout">
      <span slot="subTitle">Please fill information and read carefully</span>
      <v-form slot="body" class="my-16" ref="form">
        <v-card-subtitle>
          Marked field with asrisk (*) means that is necessary to continue.
        </v-card-subtitle>
        <BaseTextInput
          v-model="name"
          label="Name *"
          prepend-icon="mdi-form-textbox"
          :rules="nameRules"
        ></BaseTextInput>
        <BaseTextInput
          v-model="email"
          label="E-mail"
          prepend-icon="mdi-at"
          :rules="emailRules"
        ></BaseTextInput>
        <BaseTextInput
          v-model="phone"
          label="Phone *"
          prepend-icon="mdi-phone"
          :rules="phoneRules"
        ></BaseTextInput>
        <BaseTextInput
          v-model="nrc"
          label="NRC *"
          prepend-icon="mdi-account-outline"
          :rules="nrcRules"
        ></BaseTextInput>
        <v-menu
          v-model="dateMeun"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Picker without buttons"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              class="ma-5"
              dense
              color="green lighten-2"
              outlined
              shaped
              :rules="dateRules"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="dateMeun = false"
          ></v-date-picker>
        </v-menu>
      </v-form>
      <BaseButton slot="button" :disabled="false" @click="checkout">
        <template slot="label">Checkout</template>
        <template slot="right-icon">mdi-arrow-right-bold</template>
      </BaseButton>
    </BaseFormCard>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar">
        Ticket have been submitted.

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Final",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      nrc: "",
      nameRules: [v => !!v || "Name is required"],
      emailRules: [v => !v || /.+@.+\..+/.test(v) || "E-mail must be valid"],
      phoneRules: [
        v => !!v || "Phone is required",
        v => (v && v.length >= 9) || "Phone must be valid"
      ],
      nrcRules: [v => !!v || "NRC is required"],
      date: new Date().toISOString().substr(0, 10),
      dateRules: [
        v => !!v || "Date is required",
        v =>
          v >= new Date().toISOString().substr(0, 10) ||
          "Date must be today or above."
      ],
      dateMeun: false,
      snackbar: false
    };
  },
  methods: {
    checkout() {
      //console.log(this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("checkout/createCheckout", {
            total: this.$store.state.checkout.seats.length * 5000,
            date: this.date,
            name: this.name,
            email: this.email,
            phone: this.phone,
            nrc: this.nrc
          })
          .then(() => {
            console.log("hter");
            this.name = "";
            this.email = "";
            this.phone = "";
            this.nrc = "";
            this.date = new Date().toISOString().substr(0, 10);
            this.snackbar = true;
            this.$refs.form.resetValidation();
          });
      } else {
        console.log("error");
      }
    }
  }
};
</script>
