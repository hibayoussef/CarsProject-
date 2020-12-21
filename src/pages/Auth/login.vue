<template>
  <v-app class="bg">
    <v-container>
      <v-layout row class="padding">
        <v-flex xs12 sm6 offset-sm3>
          <v-card class="mx-auto mt-5 pa-4 text-center secondary text-no-wrap" max-width="1500" id="limited-products" :style="isShowError ? 'border: 3px solid #D50000;' : 'border: 3px solid #D50000;'">
            <!-- <v-alert color="error" :value="error" icon="close">some Data are Wrong Email or Password </v-alert> -->
            <v-card-text>
              <v-container class="margin">
                <form>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Email"
                        id="email"
                        v-model="email"
                        type="text"
                        color="#D50000"
                        class="myfont"
                        required
                      >
                        {{ email }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        v-model="password"
                        type="text"
                        color="#D50000"
                        class="myfont"
                        required
                      >
                        {{ password }}
                      </v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-btn @click="onSignIn" class="red accent-4 color myfont">
                        Sign In
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

export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
      isShowError: false,
    };
  },
  methods: {
    ...mapActions(["LOGIN"]),
    onSignIn() {
      console.log('Signing in .....');
      this.LOGIN({
        email: this.email,
        password: this.password,
      })
        .then((res) => {
          console.log("Login succeeded");
          this.$router.push("/home");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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

.margin {
  margin-top: 10px;
}

.padding {
  padding-top: 40px;
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://wallpaperaccess.com/full/48895.jpg")
    no-repeat center center;
  background-size: cover;
  transform: scale(1.0);
}
</style>
