// npm install firebase



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBhT-zjeSBr177joTm5DJSH3VqHqL7_cFQ",
//   authDomain: "my-auth-app-2e25e.firebaseapp.com",
//   projectId: "my-auth-app-2e25e",
//   storageBucket: "my-auth-app-2e25e.firebasestorage.app",
//   messagingSenderId: "1087010142144",
//   appId: "1:1087010142144:web:e238dc9de18105744c3a25",
//   measurementId: "G-VWVJCWF7PG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhT-zjeSBr177joTm5DJSH3VqHqL7_cFQ",
  authDomain: "my-auth-app-2e25e.firebaseapp.com",
  projectId: "my-auth-app-2e25e",
  storageBucket: "my-auth-app-2e25e.firebasestorage.ap",
  messagingSenderId: "1087010142144",
  appId: "1:1087010142144:web:e238dc9de18105744c3a25",
    measurementId: "G-VWVJCWF7PG"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut };
