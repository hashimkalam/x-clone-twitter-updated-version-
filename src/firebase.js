import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-U0wgcyT79MOSQTkGQI-TRs6xb5aIigw",
  authDomain: "twitter-clone-a5b74.firebaseapp.com",
  projectId: "twitter-clone-a5b74",
  storageBucket: "twitter-clone-a5b74.appspot.com",
  messagingSenderId: "870315339447",
  appId: "1:870315339447:web:547725807c72c6adf7a732",
  measurementId: "G-44MVBCX563",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
