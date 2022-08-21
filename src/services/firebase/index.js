// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa-J2BakOOd-t8L5hXNl7fmNNgtckkAVo",
  authDomain: "cursoreact-50a89.firebaseapp.com",
  projectId: "cursoreact-50a89",
  storageBucket: "cursoreact-50a89.appspot.com",
  messagingSenderId: "483968798444",
  appId: "1:483968798444:web:781eda98f6d48e9c381fc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)