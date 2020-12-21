import api from "../../axiosWithDelimiterFile";

export default {
  namespace: true,
  state: {
    token: localStorage.getItem("accessToken") || null,
  },

  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
  },

  mutations: {
    retrieveToken(state, userData) {
      state.token = userData.token;
    },

    destroyToken(state) {
      state.token = null;
    },
  },
  actions: {
    destroyToken({ commit }) {
      if (this.getters.loggedIn) {
        localStorage.removeItem("accessToken");
        commit("destroyToken");
      }
    },

    SIGNUP(_, userData) {
      console.log(`userData: `, userData);
      return new Promise((resolve, reject) => {
        api
          .post(`/api/auth/signup`, userData)
          .then((res) => {
            console.log(res);
            resolve(res);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },

    LOGIN({ commit }, userData) {
      console.log('userData: ', userData);
      userData.username = userData.email;
      return new Promise((resolve, reject) => {
        api
          .post("/api/auth/signin", userData)
          .then((response) => {
            console.log(response);
            const token = response.data.accessToken;
            commit("retrieveToken", token);
            localStorage.setItem("accessToken", token);
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            reject(error);
          });
      });
    },
  },
};
