// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbfACRdJgd2l6doQz-FwBhOaWYC2a6AJQ",
    authDomain: "vue3-2023-8389d.firebaseapp.com",
    projectId: "vue3-2023-8389d",
    storageBucket: "vue3-2023-8389d.appspot.com",
    messagingSenderId: "148694761399",
    appId: "1:148694761399:web:c9ac5ad68379fadaf9b232"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }