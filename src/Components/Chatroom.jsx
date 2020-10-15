import React from 'react'
import { useState } from 'react';
import ChatMessage from './ChatMessage'
import firebase from "firebase";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import photoURL from './ChatMessage'


export default function Chatroom({ auth }) {
const firestore = firebase.firestore();
const messagesRef = firestore.collection('messages');
const query = messagesRef.orderBy('createdAt').limitToLast(25);


const [messages] = useCollectionData(query, {idField: 'id'});

const [formValue, setFormValue] = useState('');

const sendMessage = async (e) => {
  e.preventDefault();

  const { uid, photoURL } = auth.currentUser;

}




  return (
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
    </main>
  )
}


