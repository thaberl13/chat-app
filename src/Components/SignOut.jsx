import React from "react";
import firebase from "firebase";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function SignOut() {
  return (
    <div>
      <button onClick={() => auth.signOut()}>
        <FontAwesomeIcon
          type="submit"
          icon={faSignOutAlt}
          size="lg"
          color="darkslategrey"
        />
      </button>
      {/* <button onClick={() => auth.signOut()}>Sign Out</button> */}
    </div>
  );
}
