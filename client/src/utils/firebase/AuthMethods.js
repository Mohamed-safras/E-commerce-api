import { auth, githubProvider, googleProvider } from "./firebase.utils";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

// google provider
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// sign in with popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// github provider

githubProvider.addScope("repo");
githubProvider.setCustomParameters({
  allow_signup: "false",
});

export const signInWithGithubPopup = () =>
  signInWithPopup(auth, githubProvider);

// Email auth

export const createAuthUserWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signAuthInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// sign in with redirect

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const logout = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
