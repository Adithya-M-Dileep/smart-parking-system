// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAagtnx9xWBwgU6DTF5WG8ABBzvKGuNLc8",
  authDomain: "car-parking-system-275a8.firebaseapp.com",
  databaseURL: "https://car-parking-system-275a8-default-rtdb.firebaseio.com",
  projectId: "car-parking-system-275a8",
  storageBucket: "car-parking-system-275a8.appspot.com",
  messagingSenderId: "164544458296",
  appId: "1:164544458296:web:a3d54482a0108ff6fdc0cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const fs = getFirestore(app);