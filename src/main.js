import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {createProvider} from './vue-apollo'

createApp(App)
  .use(store)
  .use(router)
  .use(createProvider)
  .mount("#app");
