import React from "react";
import { auth } from "firebase";

export default function ChatMessage(props) {
  const { text, uid, photoUrl } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoUrl} />
      <p>{text}</p>
      <h1>Chat Message</h1>
    </div>
  );
}
