import React, { useEffect, useState } from "react"; // import useEffect and useState hooks
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory/chatHistory"


function App() {
  // use useState hook to initialize chatHistory state
  const [chatHistory, setChatHistory] = useState([]);

  // use useEffect hook to connect to WebSocket and update chatHistory state
  useEffect(() => {
    connect((msg) => {
      console.log("New Message")
      setChatHistory(prevState => ([
        ...prevState,
        msg
      ]))
      console.log(chatHistory);
    });
  }, []); // empty dependency array means this effect runs only once

  // define a function to send a message
  function send() {
    console.log("hello");
    sendMsg("hello");
  }

  // return the JSX element to render
  return (
    <div className="App">
      <Header/>
      <ChatHistory chatHistory={chatHistory}/>
      <button onClick={send}>send</button>
    </div>
  );
}

export default App;