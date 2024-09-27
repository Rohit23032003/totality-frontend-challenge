// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAjQ0D7DL9JjDZqXwHjNqg6T7hZy-52fZw",
//   authDomain: "rentalpropertyapp-fc3e2.firebaseapp.com",
//   projectId: "rentalpropertyapp-fc3e2",
//   storageBucket: "rentalpropertyapp-fc3e2.appspot.com",
//   messagingSenderId: "767110895759",
//   appId: "1:767110895759:web:40c6fe0044d209acdaf8fa",
//   measurementId: "G-11KBQGR731"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// src/firebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjQ0D7DL9JjDZqXwHjNqg6T7hZy-52fZw",
    authDomain: "rentalpropertyapp-fc3e2.firebaseapp.com",
    projectId: "rentalpropertyapp-fc3e2",
    storageBucket: "rentalpropertyapp-fc3e2.appspot.com",
    messagingSenderId: "767110895759",
    appId: "1:767110895759:web:40c6fe0044d209acdaf8fa",
    measurementId: "G-11KBQGR731"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
