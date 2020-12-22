<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-right ">
          <v-btn
            class="gray accent-4 color myfont font-weight-bold mr-4"
            @click="onCreateshm"
          >
            Create
          </v-btn>
          <v-btn
            class="gray accent-4 color myfont font-weight-bold pr-4 mr-4"
            @click="onEvictCaching"
          >
            EVICT CACHING
          </v-btn>
        </v-flex>
      </v-layout>
      <v-card
        class="mx-auto mt-5 pa-3"
        max-width="100%"
        id="limited-products"
        :style="'border: 0px solid #D50000;'"
      >
        <v-data-table
          :headers="itemsHeaders"
          :items="loadedItemsGetter"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        >
          <template #[`item.actions`]="{ item }">
            <v-btn icon @click="delete(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>

            <!-- <v-btn  @click="onCreated">
                Create
              </v-btn>
              <v-btn class="red accent-4 color myfont ml-3">
                get
              </v-btn>
              <v-btn class="red accent-4 color myfont" @click="onCreateCar">
                GeT ALL
              </v-btn>
              <v-btn class="red accent-4 color myfont" @click="onCreateCar">
                DELETE
              </v-btn> -->
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
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import GettersTypes from "../../store/types/getters-types";
import ActionsTypes from "../../store/types/actions-types";

export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      editedItem: {
        id: 0,
        name: "",
        price: null,
        numberofseats: null,
      },
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      loadedItemsGetter: GettersTypes.GET_ITEMS_FORM_GETTER,
      itemsHeaders: GettersTypes.GET_HEADERS_ITEMS_GETTER,
    }),
  },
  mounted() {
    // this.loadedCarsGetter();
  },
  methods: {
    ...mapActions({
      evictCaching: ActionsTypes.EVICT_CACHING_ACTION
    }),
    onCreateCar() {},
    onCreateshm() {},
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
  },
};
</script>

<style scoped>
.color {
  color: #d50000;
  font-family: "Mansalva", cursive;
  font-size: 24;
}
</style>
