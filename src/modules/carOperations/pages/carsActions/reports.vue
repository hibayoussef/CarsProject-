<template>
  <v-row justify="center">
    <v-dialog v-model="editModal" persistent max-width="1050px" height="400px">
      <v-card>
        <v-layout>
          <v-flex xs12>
            <div class="myfont pl-5">
              <v-card-title>
                <span>Report</span>
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
                      name="email"
                      label="Email"
                      id="email"
                      class="colorLabel"
                      v-model="email"
                      multi-line
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      name="date"
                      label="Date"
                      id="date"
                      v-model="date"
                      class="colorLabel"
                      multi-line
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      name="content"
                      label="Content"
                      id="content"
                      v-model="content"
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
                Generate
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
import ActionsTypes from "../../store/types/actions-types";

export default {
  props: ['car', 'withOpt'],
  data() {
    return {
      email: "",
      date: "",
      content: "",
    };
  },
  methods: {
    ...mapActions({
      reportAction: ActionsTypes.GET_REPORT_ACTION
    }),
    onSaveChanges() {
     const email=this.email;
     const date = "2020-01-08 12:30:00";//this.date; 
     const content = this.content;
     this.reportAction({
         email,date,content
     })
       this.$emit("closeReportModal");
    },
    onClose() {
      this.$emit("closeReprtModal");
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
