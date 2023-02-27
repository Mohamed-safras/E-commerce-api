// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPHN4tYpYc_UbYdcXqLksrIGV8tsmjjyI",
  authDomain: "clothing-store-e2c36.firebaseapp.com",
  projectId: "clothing-store-e2c36",
  storageBucket: "clothing-store-e2c36.appspot.com",
  messagingSenderId: "908625433309",
  appId: "1:908625433309:web:da1b3dfe3d4b04459cc134",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);

// google auth
export const googleProvider = new GoogleAuthProvider();
// github auth
export const githubProvider = new GithubAuthProvider();

// database

export const db = getFirestore();
