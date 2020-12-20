

<template>
  <v-container>
    <v-select
      v-model="selectedCars"
      :items="cars"
      label="Cars Menu"
      multiple
    >
      <template v-slot:prepend-item>
        <v-list-item ripple >
          <v-list-item-content>
            <v-text-field
              v-model="searchTerm"
              placeholder="Search"
              @input="searchCar"
            ></v-text-field>
          </v-list-item-content>

        </v-list-item>
        <v-divider class="mt-2"></v-divider>
      </template>
      <template v-slot:append-item>
        <v-divider class="mb-2"></v-divider>
        <v-list-item >
        </v-list-item>
      </template>
    </v-select>
  </v-container>
</template>
<script>
import { mapActions , mapGetters } from 'vuex';
import ActionsTypes from '../../store/types/actions-types';
import GettersTypes from '../../store/types/getters-types';

export default {
  data: () => ({
    cars: [
    ],
    selectedCars: [],
  }),

  computed: {
    ...mapGetters({
        getcarsdispatcher: GettersTypes.GET_CARS_GETTERS
    })
   
  },

  methods: {
    ...mapActions({
        carwithoptimisticlock: ActionsTypes.GET_CARS_WITH_OPTIMISTIC_LOCK
    }),
    getcars(cars){
       this.getcarsdispatcher({
           cars
       })
   }
  },
};
</script>


<style scoped>

</style>