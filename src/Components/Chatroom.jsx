import React from "react";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import photoURL from "./ChatMessage";
import { auth } from "firebase/auth";
import SignOut from "./SignOut"
import user from '../App' 

export default function Chatroom({ auth, user }) {
  const dummy = useRef();
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limitToLast(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
  };

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main >
      <div ref={dummy}/>
      <form id="chat-room" onSubmit={sendMessage}>
      {messages &&
        messages.map((msg) => (
          <ChatMessage 
          user={user}
          currentUser={auth.currentUser}
          key={msg.id}
          message={msg}
          />
          ))}
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Send a message"
          ></input>
          <button id="send-message-button" type="submit" disabled={!formValue}>
            💬
          </button>
        </form>
      <span ref={dummy}></span>
    </main>
  );
}
