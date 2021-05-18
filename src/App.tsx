import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import firebase from "firebase/app";
import "firebase/firestore";

import list from "./assets/data.json";
import PostView from "./components/PostView/PostView";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyBiGMrLywJARsfP72uC-PIPDsorpfLCcWg",
    authDomain: "zemoga-test-ui.firebaseapp.com",
    projectId: "zemoga-test-ui",
    storageBucket: "zemoga-test-ui.appspot.com",
    messagingSenderId: "370452997357",
    appId: "1:370452997357:web:9c2645e9c9571cfad1d8e4",
    measurementId: "G-2GYPSZGJES",
  });
}

const App: React.FC = () => {
  return <PostView data={list.data} />;
};

export default App;
