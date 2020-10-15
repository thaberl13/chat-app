import React from "react";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import photoURL from "./ChatMessage";
import { auth } from "firebase/auth";
import SignOut from "./SignOut"

export default function Chatroom({ auth }) {
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
      <form id="chat-room" onSubmit={sendMessage}>
      {messages &&
        messages.map((msg) => (
          <ChatMessage 
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
          <button type="submit" disabled={!formValue}>
            💬
          </button>
          <SignOut/>
        </form>
      <span ref={dummy}></span>
    </main>
  );
}
