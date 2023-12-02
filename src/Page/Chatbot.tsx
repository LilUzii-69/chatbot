import React, { useState, useEffect } from "react";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    // You can replace this with actual server-side communication.
    // For simplicity, we're using a setTimeout to simulate receiving messages.
    const fakeIncomingMessage = "This is a fake incoming message.";
    setTimeout(() => setMessages([...messages, fakeIncomingMessage]), 5000000);
  }, [messages]);

  return (
    <div className="Chatbot">
      <div className="chat-container">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
