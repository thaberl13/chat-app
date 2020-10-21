import React from "react";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignIn from "../src/Components/SignIn";
import ChatRoom from "../src/Components/Chatroom";
import NavBar from "../src/Components/NavBar";
import "firebase/auth";
import user from './App' 

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

console.log(user)
  return (
    <div className="App">
      <NavBar id="navbar"/>
      <header>
        <h1>Let's Chat 💬</h1>
      </header>
      <section>
        {user ? <ChatRoom auth={auth} user={user} /> : <SignIn user={user} />}
      </section>
    </div>
  );
}

export default App;
