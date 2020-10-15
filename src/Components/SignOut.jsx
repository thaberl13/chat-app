import React from 'react'
import firebase from "firebase";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


const auth = firebase.auth();
const firestore = firebase.firestore();

export default function SignOut() {
  return (
    <div>
     <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}
