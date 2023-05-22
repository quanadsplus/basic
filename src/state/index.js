// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);


import authentication from "./modules/auth.module";


// export default new Vuex.Store({
//   modules: {
//     authentication,
//   },
//   strict: process.env.NODE_ENV !== "production",
// });

import { createStore } from 'vuex'


const store = createStore({
  modules: {
    authentication,
  },
  strict: process.env.NODE_ENV !== "production",
})

export default store

