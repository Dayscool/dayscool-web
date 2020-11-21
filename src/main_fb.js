/* ========================
  Variables
======================== */

const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();

/* ========================
  Event Listeners
======================== */

FIREBASE_AUTH.onAuthStateChanged(handleAuthStateChanged);
FIREBASE_MESSAGING.onTokenRefresh(handleTokenRefresh);

signInButton.addEventListener("click", signIn);
signOutButton.addEventListener("click", signOut);
subscribeButton.addEventListener("click", subscribeToNotifications);
unsubscribeButton.addEventListener("click", unsubscribeFromNotifications);
sendNotificationForm.addEventListener("submit", sendNotification);


function subscribeToNotifications() {
    FIREBASE_MESSAGING.requestPermission()
      .then(() => handleTokenRefresh())
      .then(() => checkSubscription())
      .catch((err) => {
        console.log("error getting permission :(");
      });
  }

export default 