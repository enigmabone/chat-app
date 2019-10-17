import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALcM7rO8pfAuD_HlXUK4d4MsjFcQKT1ak",
  authDomain: "chat-app-e58d5.firebaseapp.com",
  databaseURL: "https://chat-app-e58d5.firebaseio.com",
  projectId: "chat-app-e58d5",
  storageBucket: "chat-app-e58d5.appspot.com",
  messagingSenderId: "91400458799",
  appId: "1:91400458799:web:95a48a4f093c39a7b8acda"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
