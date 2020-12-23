<template>
  <v-row justify="center">
    <v-dialog v-model="editModal" persistent max-width="1050px" height="400px">
      <v-card>
        <v-layout>
          <v-flex xs12>
            <div class="myfont pl-5">
              <v-card-title>
                <span> Edit Car</span>
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
                      name="name"
                      label="Name"
                      id="name"
                      class="colorLabel"
                      v-model="editedName"
                      multi-line
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      name="priceOfSale"
                      label="Price Of Sale"
                      id="priceOfSale"
                      v-model="editedPrice"
                      class="colorLabel"
                      multi-line
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      name="numberOfSeats"
                      label="NumberOfSeats"
                      id="numberOfSeats"
                      v-model="editedNumberOfSeats"
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
              <v-btn class="myfont pl-5 text-right" text @click="onSaveChanges">
                Save
              </v-btn>
              <v-btn
                class="myfont pl-5 text-center"
                text
                @click="closeModal"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import ActionsTypes from "../store/types/actions-types";

export default {
  props: ["car"],
  data() {
    return {
      editedName: this.car.name,
      editedPrice: this.car.price,
      editedNumberOfSeats: this.car.seatsNumber,
      editModal: true
    };
  },
  methods: {
    ...mapActions({
      editCarInformations: ActionsTypes.EDIT_CAR_ACTION,
    }),

    onSaveChanges() {
      const UpdatedCar = { ...this.car };
      UpdatedCar.name = this.editedName;
      UpdatedCar.price = this.editedPrice;
      UpdatedCar.seatsNumber = this.editedNumberOfSeats;

      this.editCarInformations(UpdatedCar);
      this.$emit('closeEditModal');

    },
    closeModal() {
      this.$emit('closeEditModal');
    }
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
