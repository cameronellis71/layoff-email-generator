import React, { useState, useRef, useEffect } from "react";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState("chat"); // Tracks which view is displayed

  const questions = [
    {
      question:
        "Hello! I'm a chatbot that can help you write a layoff email\n\n" +
        "I'll ask you a few questions and all you have to do is provide an answer. I'll do the rest. " +
        "\n\nIf you can't think of anything, use one of the suggestions below" +
        "\n\nTo start, can you give me a number?",
      suggestions: ["10,000", "1,000", "5,000"],
    },
    { question: "Can you give me a company name?", suggestions: ["Snup", "Macrosoft", "TokTik"] },
    { question: "Can you give me a reason for the layoff?", suggestions: ["conflict in the Middle East", "macroeconomic headwinds", "Mercury in retrograde"] },
    { question: "Can you give me a number?", suggestions: ["10,000", "1,000", "5,000"] },
    { question: "Can you give me a name?", suggestions: ["Evan", "Jeff", "Sundar"] },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ sender: "bot", text: questions[0].question }]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (inputText) => {
    if (!inputText.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: inputText }]);
    setResponses((prev) => [...prev, inputText]);

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (currentQuestionIndex < questions.length - 1) {
      setMessages((prev) => [...prev, { sender: "bot", text: questions[nextQuestionIndex].question }]);
    } else {
      const answers = responses.concat(inputText);

      const generatedEmail =
        "Got it, here's what I was able to come up with for you:\n\n" +
        "Dear Team,\n\n" +
        "Today we are making some significant changes to the structure of our team and the design of our organization " +
        "which will result in approximately " +
        answers[0] +
        " team members leaving " +
        answers[1] +
        ". We believe " +
        "these changes are necessary because of " +
        answers[2] +
        " and " +
        answers[3] +
        " internet memes." +
        "\n\n" +
        "We know our unique culture, and our values of being kind, smart, and creative, are a reflection of the " +
        "amazing people who work at " +
        answers[1] +
        ". It pains me that many people I have deeply enjoyed working" +
        " with, who I know firsthand are extremely talented, will no longer be members of our team at " +
        answers[1] +
        ". We are" +
        " infinitely grateful for your contributions, your hard work, and your ambition to make a positive impact" +
        " in the world." +
        "\n\n" +
        answers[4] +
        "\n\n\nPlease let me know if you'd like me to create another layoff email for you";

      setMessages((prev) => [...prev, { sender: "bot", text: generatedEmail }]);
    }
    setCurrentQuestionIndex(nextQuestionIndex);
    setInput("");
  };

  const handleSuggestionClick = (suggestion) => {
    handleSend(suggestion);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend(input);
      e.preventDefault();
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <div
        style={{
          position: "relative",
          width: isSidebarOpen ? "250px" : "60px",
          background: "#f1f1f1",
          color: "#000",
          height: "100%",
          overflow: "hidden",
          zIndex: 1000,
          transition: "width 0.3s ease",
        }}
      >
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          style={{
            background: "transparent",
            color: "#000",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            padding: "10px",
            textAlign: "center",
            display: "block",
            width: "100%",
          }}
        >
          ☰
        </button>

        {isSidebarOpen && (
          <div style={{ padding: "10px" }}>
            <button
              onClick={() => setCurrentView("chat")}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                margin: "5px 0",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentView("donate")}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                margin: "5px 0",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              Donate
            </button>
            <button
              onClick={() => setCurrentView("about")}
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                margin: "5px 0",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              About
            </button>
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {currentView === "chat" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
                    background: message.sender === "user" ? "#007bff" : "#e1e1e1",
                    color: message.sender === "user" ? "#fff" : "#000",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "5px 0",
                    maxWidth: "70%",
                  }}
                >
                  {message.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div style={{ padding: "10px", display: "flex", gap: "10px" }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your response..."
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                onClick={() => handleSend(input)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px",
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        )}
        {currentView === "donate" && (
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1>Donate Page</h1>
          </div>
        )}
        {currentView === "about" && (
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1>About Page</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
