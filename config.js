

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import {getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"

  const firebaseConfig = {
    apiKey: "AIzaSyCnN-ypXDiO1iSoNW4HEl8YnIRtx-Ahhz8",
    authDomain: "blogging-app-4cd56.firebaseapp.com",
    projectId: "blogging-app-4cd56",
    storageBucket: "blogging-app-4cd56.appspot.com",
    messagingSenderId: "480631438692",
    appId: "1:480631438692:web:d8e3ba39613dd9f9028e71",
    measurementId: "G-VBCMSD6Y0F"
  };


  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);

 
