<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import firebase from "firebase";
export default {
  name: "Home",
  components: {
    Login
  },
  mounted() {
    const FIREBASE_MESSAGING = firebase.messaging();
    const FIREBASE_DATABASE = firebase.database();
    FIREBASE_MESSAGING.requestPermission()
      .then(() => FIREBASE_MESSAGING.getToken({ vapidKey: 'BH1B2SpomJAElTn2FxQqtyXJDyvOOkyaPGn8a-z1Ye-2tnV-k3dOHzoIP4gRiXmAY9Xff6PCBh5r4FDKsVImEDo' }))
      .then((token) => {
         console.log(token);
         FIREBASE_DATABASE.ref('/tokens').push({
          token: token,
          });
      })
    }
};
</script>
