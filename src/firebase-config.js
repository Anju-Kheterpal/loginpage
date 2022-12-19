import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBau01L2OWODZLCmFbt0eb_FZacanpjMag",
  authDomain: "dream-girls.firebaseapp.com",
  databaseURL: "https://dream-girls-default-rtdb.firebaseio.com",
  projectId: "dream-girls",
  storageBucket: "dream-girls.appspot.com",
  messagingSenderId: "299437353382",
  appId: "1:299437353382:web:492ef2e6b0edf4b5dac767",
  measurementId: "G-0RTR24PWVC",
};

export const app = initializeApp(firebaseConfig);
