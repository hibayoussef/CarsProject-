<template>
  <v-app>
    <v-container>
      <v-layout row class="padding">
        <v-flex xs12 sm6 offset-sm3>
          <v-card
            :class="`rounded-lg`"
            class="pa-4 text-center secondary"
            :style="'border: 3px solid #D50000;'"
          >
            <v-card-text>
              <v-container class="margin">
                <!-- <form @submit.prevent="onCreateCar"> -->
                <form>
                  <v-layout row>
                    <p class="size text-left fontcolor font-weight-bold">
                      Please fill in the shMap information you want to Create it:
                    </p>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="key"
                        label="Key"
                        id="key"
                        v-model="key"
                        type="text"
                        color="#D50000"
                        class="myfont"
                        required
                      >
                        {{ key }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="value"
                        label="Value"
                        id="value"
                        v-model="value"
                        type="value"
                        color="#D50000"
                        class="myfont"
                        required
                      >
                        {{ value }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                 
                  <!-- :disabled="!formIsValid" -->
                  <v-layout row>
                    <v-flex xs12 class="text-right">
                      <v-btn
                        class="red accent-4 color myfont"
                        @click="onCreateshMap"
                      >
                        SAVE
                      </v-btn>
                      <v-btn class="red accent-4 color myfont ml-3">
                        Cancel
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import ActionsTypes from "../store/types/actions-types";

export default {
  data() {
    return {
      key: null,
      value: null
    };
  },
  created() {},
  mounted() {},
  methods: {
    onCreateshMap() {
      this.createshmdispatcher({
        key: this.key,
        value: this.value
      })
    },
    ...mapActions({
      createshmdispatcher: ActionsTypes.ADD_CRAETE_SHARED_MAP_ACTION,
    }),
  },
  computed: {
    
  },
};
</script>

<style scoped>
.myfont {
  font-family: "Mansalva", cursive;
}
.color {
  color: #fafafa;
}

.fontcolor {
  color: white;
}

.margin {
  margin-top: 10px;
}

.padding {
  padding-top: 40px;
}

.size {
  font-size: 16px;
}
</style>
