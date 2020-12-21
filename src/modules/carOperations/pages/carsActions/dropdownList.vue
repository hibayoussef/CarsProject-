

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
              @input="searchCars"
            ></v-text-field>
          </v-list-item-content>

        </v-list-item>
        <!-- ******************************** -->
                       <v-btn
                        class="red accent-4 color myfont"
                        @click="onCreateCar"
                      >
                        Add
                      </v-btn>
    <!-- ***************************** -->
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
    searchTerm: "",
    cars: [
        'Apples',
        'Apricots',
        'Avocado',
        'Bananas',
        'Blueberries',
    ],
    selectedCars: [],
    carsCopy: [],
  }),
    mounted(){
      this.carsCopy = [...this.cars];
    },
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
   },
   onCreateCar() {},
// *****************search Item********************
searchCars() {
      if (!this.searchTerm) {
        this.cars = this.carsCopy;
      }

      this.cars = this.carsCopy.filter((car) => {
        return car.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    }
  //***************************** */


  },
};
</script>


<style scoped>

</style>