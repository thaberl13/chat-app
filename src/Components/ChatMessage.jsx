import React from "react";
import { auth } from "firebase";
import currentUser from "./Chatroom.jsx";

export default function ChatMessage(props, { auth, currentUser }) {
  const { text, uid, photoUrl } = props.message;
  const messageClass = uid === currentUser ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoUrl} />
      <h4>{auth}</h4>
      <p>{text}</p>
    </div>
  );
}
