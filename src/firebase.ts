import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQnHunStyGVy6ZMKotIShPypSbrMG60Sw",
  authDomain: "vivaran---creations.firebaseapp.com",
  databaseURL: "https://vivaran---creations-default-rtdb.firebaseio.com",
  projectId: "vivaran---creations",
  storageBucket: "vivaran---creations.firebasestorage.app",
  messagingSenderId: "805583936539",
  appId: "1:805583936539:web:9e9f372eafd075a99facbe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);