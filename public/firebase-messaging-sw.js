importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');


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

const messaging = firebase.messaging();

messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
  });