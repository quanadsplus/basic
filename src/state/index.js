import authentication from "./modules/auth.module";
import layout from "./modules/layout.module";
import notification from "./modules/notification.module";
import todo from "./modules/todo.module";

import { createStore } from 'vuex'


const store = createStore({
  modules: {
    authentication,
    layout,
    notification,
    todo,
  },
  strict: process.env.NODE_ENV !== "production",
})

export default store

