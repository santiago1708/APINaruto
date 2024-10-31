// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBPkX9u9fGIhlTZeCrLbgH34HNoTqXh48",
  authDomain: "imagenesapi-ec3d9.firebaseapp.com",
  projectId: "imagenesapi-ec3d9",
  storageBucket: "imagenesapi-ec3d9.appspot.com",
  messagingSenderId: "952819708903",
  appId: "1:952819708903:web:69b10b2b7ac6ebbebac342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)