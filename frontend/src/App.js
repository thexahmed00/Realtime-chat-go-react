import React, { useEffect } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";

function App() {
  // call connect once when the component mounts
  useEffect(() => {
    connect();
  }, []);

  // define a function to send a message
  function send() {
    console.log("hello");
    sendMsg("hello");
  }

  // return the JSX element to render
  return (
    <div className="App">
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;