import React from "react";
import { useEffect, useRef, useState } from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
require("firebase/auth");

firebase.initializeApp({
  apiKey: "AIzaSyCpbCrduRMkh4S6mPNNeyGhkFymiyAg_js",
  authDomain: "chat-app-f6395.firebaseapp.com",
  databaseURL: "https://chat-app-f6395.firebaseio.com",
  projectId: "chat-app-f6395",
  storageBucket: "chat-app-f6395.appspot.com",
  messagingSenderId: "113338999258",
  appId: "1:113338999258:web:588c343e9af2fc8d2560e3",
  measurementId: "G-H9WVE2ZC69",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function SignIn({ user }) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}
