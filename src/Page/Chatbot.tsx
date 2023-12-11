import React, { useState, useEffect } from "react";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(() => {
    // Initial greeting from the bot
    const initialGreeting = "Hello! I am Penhuang.";

    // Simulate the bot sending a greeting message
    setMessages([initialGreeting]);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // User's message
      const userMessage = newMessage;

      // Simulate bot's response to the user's message
      const botResponse = "I received your message.";

      // Update the chat with both user's message and bot's response
      setMessages([...messages, userMessage, botResponse]);

      // Clear the input field
      setNewMessage("");
    }
  };

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
          <button className="chat-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
