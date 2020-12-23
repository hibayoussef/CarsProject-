<template>
  <v-app>
    <v-container>
      <v-layout row class="padding">
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-layout>
              <v-flex xs12>
                <div class="myfont pl-5">
                  <v-card-title>
                    <span> BUYING A CAR</span>
                  </v-card-title>
                </div>
              </v-flex>
            </v-layout>
            <v-divider xs12></v-divider>

            <v-layout>
              <v-flex xs12>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          name="buyerName"
                          label="Buyer Name"
                          id="buyerName"
                          class="colorLabel myfont"
                          color="#D50000"
                          multi-line
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          name="priceOfSale"
                          label="Price Of Sale"
                          id="priceOfSale"
                          class="colorLabel myfont"
                          color="#D50000"
                          multi-line
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout>
              <v-flex xs12>
                <v-card-actions>
                  <v-btn
                    class="myfont pl-5 text-right"
                    text
                    @click="onSaveChanges"
                  >
                    Save
                  </v-btn>
                  <v-btn class="myfont pl-5 text-center" text>
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import ActionsTypes from '../../store/types/actions-types'

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      purchaseCar: ActionsTypes.PURCHASE_CAR_ACTION
    }),
    onSaveChanges() {
      this.purchaseCar(
        this.car
      )
    },
  },
};
</script>

<style scoped>
.myfont {
  font-family: "Mansalva", cursive;
  color: #d50000;
  font-size: 23px;
}

.colorLabel {
  color: #d50000;
}

.margin {
  margin-left: 1000px;
}
</style>
