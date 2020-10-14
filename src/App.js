import React from "react";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from 'react-firebase-hooks';
import { useCollectionData } from 'react-firebase-hooks';

firebase.initializeApp({

})

const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {
const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
       <h1>Chat App</h1>
      </header>

  </div>
  )
}

export default App;
