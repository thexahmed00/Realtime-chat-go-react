import React from "react";
import "./ChatHistory.scss";

function ChatHistory(props) {
  // use props.chatHistory to render messages
  const messages = props.chatHistory.map((msg, index) => (
    <p key={index}>{msg.data}</p>
  ));

  // return the JSX element to render
  return (
    <div className="ChatHistory">
      <h2></h2>
       {messages}
    </div>
  );
}

export default ChatHistory;