import firebase from 'firebase'
require("@firebase/firestore")

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe5_bW0GM5Jpa7hLvhA1e_PUhJ97OBEAY",
  authDomain: "p-71-edc66.firebaseapp.com",
  projectId: "p-71-edc66",
  storageBucket: "p-71-edc66.appspot.com",
  messagingSenderId: "240002490916",
  appId: "1:240002490916:web:20d5275b06ed1023b42eb1"
};
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

