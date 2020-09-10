import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCJSphnY8IHKG7aqM6vOQ6ml4sIXgBvy-s",
  authDomain: "shdzonecom.firebaseapp.com",
  databaseURL: "https://shdzonecom.firebaseio.com",
  projectId: "shdzonecom",
  storageBucket: "shdzonecom.appspot.com",
  messagingSenderId: "732917381665",
  appId: "1:732917381665:web:14c6506dc349f3417b8160",
  measurementId: "G-NT2YDVG3HM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.firestore.settings({ timestampsInSnapshots: true });
export default firebase;
