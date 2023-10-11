// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCwnXeoyOW62uv7yUyoYPnhVD2HukPI5-g",
  authDomain: "ecommerce-app-1e9c9.firebaseapp.com",
  projectId: "ecommerce-app-1e9c9",
  storageBucket: "ecommerce-app-1e9c9.appspot.com",
  messagingSenderId: "763349235762",
  appId: "1:763349235762:web:98808d2cef051925d6242b",
  measurementId: "G-ZB0YP0C3HR"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };