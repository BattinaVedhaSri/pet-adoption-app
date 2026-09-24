import { useEffect, useState } from "react";

function Communication() {
  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const [messages, setMessages] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("messages")) || []
    );
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: user?.name || "User",
      email: user?.email || "",
      text: message,
      time: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <section className="communication-section">
      <div className="communication-container">

        <h1>💬 Communication</h1>

        <p>
          Contact the shelter/admin regarding your adoption.
        </p>

        <div className="chat-box">

          <div className="messages">

            {messages.length === 0 ? (
              <p className="no-messages">
                No messages yet. Start a conversation.
              </p>
            ) : (
              messages.map((msg) => (
                <div
                  className="message-card"
                  key={msg.id}
                >
                  <strong>{msg.sender}</strong>

                  <p>{msg.text}</p>

                  <small>{msg.time}</small>
                </div>
              ))
            )}

          </div>

          <form
            className="message-form"
            onSubmit={sendMessage}
          >

            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
            />

            <button
              type="submit"
              className="auth-btn"
            >
              Send
            </button>

          </form>

        </div>

        <button
          className="auth-btn back-btn"
          onClick={() =>
            (window.location.hash = "dashboard")
          }
        >
          ← Back to Dashboard
        </button>

      </div>
    </section>
  );
}

export default Communication;