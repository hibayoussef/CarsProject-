<template>
  <v-app class="bg">
    <v-container>
       <v-layout row>
        <v-flex xs12 class="text-right ">
         
          <v-btn large router to="/addCar"  class="gray accent-4 color myfont font-weight-bold mr-4">
            CREATE
          </v-btn>
          <v-btn
            class="gray accent-4 color font-weight-bold pr-4 mr-4"
            @click="onEvictCaching"
          >
            EVICT CACHING
          </v-btn>
        </v-flex>
      </v-layout>
        <!-- <v-list-item ripple >
          <v-list-item-content>
            <v-text-field
            color="#D50000"
              v-model="searchTerm"
              placeholder="Search"
              @input="searchCars"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item> -->
      <v-card
        class="mx-auto mt-5 pa-3"
        max-width="100%"
        id="limited-products"
        :style="'border: 0px solid #D50000;'"
      >
        <v-data-table
          :headers="tableHeaders"
          :items="loadedCarsGetter"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template #[`item.actions`]="{ item }">
            <v-btn icon
             @click="edit(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="onDelete(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
             <v-btn icon 
             @click="onPurchase(item)">
              <v-icon>mdi-currency-usd</v-icon>
            </v-btn>

              <v-btn icon 
             @click="onPurchaseOptimistik(item)">
              <v-icon>mdi-currency-usd-off</v-icon>
            </v-btn>

          </template>
        </v-data-table>

        <!-- pagination -->
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
          <v-text-field
            :value="itemsPerPage"
            label="Items per page"
            type="number"
            min="-1"
            max="15"
            @input="itemsPerPage = parseInt($event, 10)"
            class="pl-7 pr-7"
          ></v-text-field>
        </div>
        <EditCar @closeEditModal="showEditModal = false" :car="selectedCar" v-if="showEditModal"/>
        <PurchaseCar @closePurchaseModal="showPurchaseModal = false" :car="selectedCar" v-if="showPurchaseModal"/>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ActionsTypes from "../../store/types/actions-types";
import GettersTypes from "../../store/types/getters-types";
import EditCar from '../EditCar';
import PurchaseCar from '../carsActions/purchase';

export default {
  components: {
    EditCar,
    PurchaseCar

  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      selectedCar: null,
      showPurchaseModal: false,
      showEditModal: false,
      searchTerm: ''
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      loadedCarsGetter: GettersTypes.GET_CAR_FORM_GETTER,
      tableHeaders: GettersTypes.GET_HEADERS_TABLE_GETTER,
      
    }),
  },
  mounted() {
    // this.loadedCarsGetter();
    this.loadedCarsAction();
  },
  methods: {
    ...mapActions({
      evictCaching: ActionsTypes.EVICT_CACHING_ACTION,
      editcardispatcher: ActionsTypes.EDIT_CAR_ACTION,
      deletecardispatcher: ActionsTypes.DELETE_CAR_ACTION,
      loadedCarsAction: ActionsTypes.GET_ALL_CAR_ACTION
    }),
     onEvictCaching() {
      this.evictCaching()
      .then(()=>{
        console.log('ssssssss')
      }
      )
      .catch(()=>{
        console.log('error')
      })
    },
    onPurchase(car) {
      this.selectedCar = car;
      this.showPurchaseModal = true;
    },
    edit(car) {
      console.log(`this.showEditModal: ${this.showEditModal}`)
      this.showEditModal = true;
      console.log(`this.showEditModal: ${this.showEditModal}`)
      // this.editcardispatcher();
      this.showEditModal = true;
      this.selectedCar = car;
    },
    onDelete(id){
      this.deletecardispatcher(
        id
    )
    }
  },
};
</script>

<style scoped>
.color {
  color: #d50000;
  font-family: "Mansalva", cursive;
  font-size: 24;
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EeLcDeT-ydxW_QwDPBL2o5Q18PwvJBITVg&usqp=CAU")
    no-repeat center center;
  background-size: cover;
  transform: scale(1);
}
</style>
