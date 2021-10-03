<template>
  <v-container>
    <v-row>
      <v-col class="container">
        <v-card>
          <div class="container">
            <v-card-title>
              Check Percale
              <v-card-subtitle>
                which is assigned to you, using code
              </v-card-subtitle>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-row>
                <v-col cols="4">
                  <v-form @submit.prevent="showPercal" ref="form">
                    <BaseTextInput
                      v-model="code"
                      label="Enter your code"
                      class="ma-0"
                      :rules="codeRule"
                    ></BaseTextInput>
                    <v-card-actions>
                      <v-spacer />
                      <BaseButton slot="button" type="submit">
                        <template slot="label">Check</template>
                      </BaseButton>
                    </v-card-actions>
                  </v-form>
                </v-col>
                <v-col>
                  <transition name="fade">
                    <v-card v-if="percalContainer">
                      <v-card-subtitle>Your percale</v-card-subtitle>
                      <v-divider />
                      <v-card-text>
                        <v-list color="green lighten-4">
                          <v-list-item>
                            <v-list-item-content>From :</v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{ percale.from }}
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>To :</v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{ percale.to }}
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              Transmitter Name :
                            </v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{ percale.transmitter_name }}
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              Receiver Name :
                            </v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{ percale.receiver_name }}
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              Quantity :
                            </v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{ percale.quantity }}
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              Type :
                            </v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{ percale.type }}
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              Gate received date :
                            </v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{ percale.to_received_date }}
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              Receiver received date :
                            </v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{ percale.received_date }}
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-content>
                              State :
                            </v-list-item-content>
                            <v-list-item-content class="align-end">
                              {{ percaleSate }}
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-card>
                  </transition>
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CheckPercale",
  data() {
    return {
      code: null,
      codeRule: [v => !!v || "Code is required"],
      percalContainer: false,
      percale: null
    };
  },
  methods: {
    showPercal() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("percale/fetchPercaleByCode", this.code)
          .then(res => {
            console.log(res);
            if (res !== undefined) {
              this.percale = res;
              this.percalContainer = res !== undefined ? true : false;
            }
          });
      }
    }
  },
  computed: {
    percaleSate() {
      if (this.percale.to_received && this.percale.received) {
        return "Receiver received";
      } else if (this.percale.to_received) {
        return "Gate received";
      }
      return "Delivering";
    }
  }
};
</script>
<style scoped>
.container {
  min-height: 100vh;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
