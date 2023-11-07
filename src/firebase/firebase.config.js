// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD70NOvdSKKbeoL1_MbxBjnRMzz4Sd3OwE",
    authDomain: "skillnest-online-marketplace.firebaseapp.com",
    projectId: "skillnest-online-marketplace",
    storageBucket: "skillnest-online-marketplace.appspot.com",
    messagingSenderId: "451911023038",
    appId: "1:451911023038:web:38cb26b7130168563aa1ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;