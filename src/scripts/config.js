const firebaseConfig = {
  apiKey: "AIzaSyC03XhKChQ6x-3LMOAPBoRTnSFoyBFle_Y",
  authDomain: "etec-20240229.firebaseapp.com",
  databaseURL: "https://etec-20240229-default-rtdb.firebaseio.com",
  projectId: "etec-20240229",
  storageBucket: "etec-20240229.appspot.com",
  messagingSenderId: "756171881252",
  appId: "1:756171881252:web:c80af0d20f1bcfb4c711b1",
  measurementId: "G-6BXSJMZVS1"
};

firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();