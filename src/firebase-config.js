// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMK076UNTLg2ShpWoGRMBbgqbaToSs37A",
    authDomain: "brainlyuiclone.firebaseapp.com",
    projectId: "brainlyuiclone",
    storageBucket: "brainlyuiclone.appspot.com",
    messagingSenderId: "530108313905",
    appId: "1:530108313905:web:375f89736ac92960ddc010",
    measurementId: "G-XDGV1NHX7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);