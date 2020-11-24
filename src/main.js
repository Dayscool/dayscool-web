import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyAHThNdzfEGtsemsRGThvjua2KwM-kui_U",
    authDomain: "dayscool-fee0.firebaseapp.com",
    databaseURL: "https://dayscool-fee0.firebaseio.com",
    projectId: "dayscool-fee0",
    storageBucket: "dayscool-fee0.appspot.com",
    messagingSenderId: "708492229851",
    appId: "1:708492229851:web:a288d7d1f96794ce5660fe",
    measurementId: "G-KEV4TN5T2X"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
