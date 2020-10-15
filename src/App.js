import React from "react";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SignIn from '../src/Components/SignIn';
import ChatRoom from '../src/Components/Chatroom';
import SignOut from '../src/Components/SignOut'
require('firebase/auth')



const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {
const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
       <h1>Chat App</h1>
      </header>

      <section>
        {user ? <ChatRoom auth={auth} /> : <SignIn user={user}/>}
        <SignOut/>
      </section>

  </div>
  )
}

export default App;
