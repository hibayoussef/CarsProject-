<template>
  <v-row justify="center">
    <v-dialog v-model="editDialog" persistent max-width="1050px" height="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          accent
          class="grey lighten-1 margin pa-4"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-layout>
          <v-flex xs12>
            <v-card-title class="color">
              <span class="headline"> Edit Recipe</span>
            </v-card-title>
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

              <v-btn
                class="red--text accent-4"
                text
                @click="editDialog = false"
              >
                Close
              </v-btn>
              <v-btn class="red--text accent-4" text @click="onSaveChanges">
                Save
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['recipe'],
  data() {
    return {
      editDialog: false,
      editedTitle: this.recipe.title,
      editedDescription: this.recipe.description,
      editedImageUrl: this.recipe.imageUrl,
      editedIngredientsName: this.recipe.ingredientsName,
      editedIngredientsQuantity: this.recipe.ingredientsQuantity

    };
  },
  methods: {
    ...mapActions([
      'updateRecipeData'
    ]),
    onSaveChanges() {
      this.editDialog = false;

      const stringifiedData = JSON.stringify(
        this.$store.dispatch('updateRecipeData', {
          id: this.recipe.id,
          title: this.editedTitle,
          description: this.editedDescription,
          imageUrl: this.editedImageUrl,
          ingredientsName: this.editedIngredientsName,
          ingredientsQuantity: this.editedIngredientsQuantity
        })
      );
      localStorage.setItem("updateRecipe", stringifiedData);
      console.log(
        "We got : ",
        JSON.parse(localStorage.getItem("updateRecipe"))
      );
    },
  },
};
</script>

<style scoped>
.color {
  color: #D50000;
  font-size: 2px;
}


.colorLabel{
    color: #D50000;
}

.margin {
  margin-left: 1000px;
}
</style>
