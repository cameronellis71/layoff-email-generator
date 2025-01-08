import React, { useState, useRef, useEffect } from "react";
import './App.css';

let templateToUse = Math.floor(Math.random())

let templates = [
  {
    template: function generateEmail(answers) {
      return `
        Got it, here's what I was able to come up with for you:

        Dear Team,

        Today we are making some significant changes to the structure of our team and the design of our
        organization which will result in approximately ${answers[0]} team members leaving ${answers[1]}.
        We believe these changes are necessary because of ${answers[2]} and ${answers[3]} internet memes.

        We know our unique culture, and our values of being kind, smart, and creative, are a reflection
        of the amazing people who work at ${answers[1]}. It pains me that many people I have deeply
        enjoyed working with, who I know firsthand are extremely talented, will no longer be members of
        our team at ${answers[1]}. We are infinitely grateful for your contributions, your hard work,
        and your ambition to make a positive impact in the world.

        ${answers[4]}

        Please let me know if you'd like me to create another layoff email for you.
      `;
    },
    questions: [
      {
        question: "Hello! I'm a chatbot that helps you write layoff emails\n\n" +
        "I'll ask you a few questions and all you have to do is provide an answer. I'll do the rest." +
        "\n\nIf you can't think of anything, use one of the suggestions below" +
        "\n\nTo start, can you give me a number?",
        suggestions: ["10,000", "1,000", "5,000"],
        answerKey: "numEmployeesLaidOff",
      },
      {
        question: "Can you give me a company name?",
        suggestions: ["Snup", "Macrosoft", "TokTik"],
        answerKey: "companyName",
      },
      {
        question: "Can you give me a reason for the layoff?",
        suggestions: ["conflict in the Middle East", "macroeconomic headwinds", "Mercury in retrograde"],
        answerKey: "layoffReason",
      },
      {
        question: "Can you give me a number?",
        suggestions: ["10,000", "1,000", "5,000"],
        answerKey: "numInternetMemes",
      },
      {
        question: "Can you give me a name?",
        suggestions: ["Evan", "Jeff", "Sundar"],
        answerKey: "layoffEmailAuthor"
      },
    ],
  },
]

function generateEmail(answers) {
  return `
Got it, here's what I was able to come up with for you:

Dear Team,

Today we are making some significant changes to the structure of our team and the design of our
organization which will result in approximately ${answers[0]} team members leaving ${answers[1]}.
We believe these changes are necessary because of ${answers[2]} and ${answers[3]} internet memes.

We know our unique culture, and our values of being kind, smart, and creative, are a reflection
of the amazing people who work at ${answers[1]}. It pains me that many people I have deeply
enjoyed working with, who I know firsthand are extremely talented, will no longer be members of
our team at ${answers[1]}. We are infinitely grateful for your contributions, your hard work,
and your ambition to make a positive impact in the world.

${answers[4]}

Please let me know if you'd like me to create another layoff email for you.
  `;
}

// Predefined list of questions with unique suggestions
const questions = [
  { 
    question: "Hello! I'm a chatbot that helps you write layoff emails\n\n" +
    "I'll ask you a few questions and all you have to do is provide an answer. I'll do the rest." +
    "\n\nIf you can't think of anything, use one of the suggestions below" +
    "\n\nTo start, can you give me a number?", 
    suggestions: ["10,000", "1,000", "5,000"],
    answerKey: "numEmployeesLaidOff",
  },
  { 
    question: "Can you give me a company name?",
    suggestions: ["Snup", "Macrosoft", "TokTik"],
    answerKey: "companyName",
  },
  { 
    question: "Can you give me a reason for the layoff?",
    suggestions: ["conflict in the Middle East", "macroeconomic headwinds", "Mercury in retrograde"],
    answerKey: "layoffReason",
  },
  { 
    question: "Can you give me a number?",
    suggestions: ["10,000", "1,000", "5,000"],
    answerKey: "numInternetMemes",
  },
  { 
    question: "Can you give me a name?",
    suggestions: ["Evan", "Jeff", "Sundar"],
    answerKey: "layoffEmailAuthor"
  }
];

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState("chat");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tracks current question
  const [responses, setResponses] = useState([]); // Stores user responses
  const [input, setInput] = useState(""); // User input
  const [messages, setMessages] = useState([
    { sender: "bot", text: questions[0].question }, // Initial question
  ]);

  const chatEndRef = useRef(null); // Reference to the end of the chat

  // Scroll to the bottom of the chat when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (inputText) => {
    if (!inputText.trim()) return;

    // Add user's response to chat
    setMessages((prev) => [...prev, { sender: "user", text: inputText }]);
    setResponses((prev) => [...prev, inputText]);

    // Move to next question
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (currentQuestionIndex < questions.length - 1) {
      // Add the next question to chat
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: questions[nextQuestionIndex].question },
      ]);

    } else {
      console.log("templateToUse: ", templateToUse)
      // If no more questions, display the summary
      // Store the last question in the answer list
      const answers = responses.concat(inputText);
      const generatedEmail = generateEmail(answers)

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: generatedEmail },
      ]);
    }
    setCurrentQuestionIndex(nextQuestionIndex);
    // Clear input field
    setInput("");
  };

  const handleSuggestionClick = (suggestion) => {
    handleSend(suggestion); // Submit the suggestion directly
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend(input);
      e.preventDefault(); // Prevents default behavior like form submission
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <div
        style={{
          position: isSidebarOpen ? "fixed" : "relative",
          width: isSidebarOpen ? "250px" : "60px",
          background: "#f1f1f1",
          height: "100%",
          overflow: "hidden",
          zIndex: 1000,
          transition: "width 0.3s ease",
        }}
      >
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="open-sidebar-button"
          onMouseEnter={(e) => (e.target.style.background = "#c0c0c0")} // Darker gray on hover
          onMouseLeave={(e) => (e.target.style.background = "#f1f1f1")} // Reset to original color
        >
          ☰
        </button>
        {isSidebarOpen && (
          <div style={{ padding: "10px" }}>
            <button
              onClick={() => setCurrentView("chat")}
              className="sidebar-options"
              onMouseEnter={(e) => (e.target.style.background = "#c0c0c0")} // Darker gray on hover
              onMouseLeave={(e) => (e.target.style.background = "#e0e0e0")} // Reset to original color
            >
              Chat
            </button>
            <button
              onClick={() => setCurrentView("about")}
              style={{
                display: "block",
                padding: "10px",
                borderRadius: "10px",
                width: "100%",
                background: "#e0e0e0", // Slightly darker gray
                border: "none",
                cursor: "pointer",
                transition: "background 0.3s ease", // Smooth transition for hover effect
              }}
              onMouseEnter={(e) => (e.target.style.background = "#c0c0c0")} // Darker gray on hover
              onMouseLeave={(e) => (e.target.style.background = "#e0e0e0")} // Reset to original color
            >
              About
            </button>
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Horizontal Navigation Bar */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: isSidebarOpen ? "250px" : "60px",
            right: 0,
            background: "#fff",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1000,
            transition: "left 0.3s ease",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            LayoffEmailGPT
          </p>
        </div>

        {currentView === "chat" && (
          <>
            {/* Chat history */}
            <div
              style={{
                flex: "1",
                padding: "20px",
                paddingTop: "70px", // Account for the fixed navbar height
                marginLeft: isSidebarOpen ? "250px" : "10px",
                overflowY: "auto", // Enable scrolling for chat history
                fontFamily: "Arial",
                transition: "margin-left 0.3s ease",
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: msg.sender === "bot" ? "flex-start" : "flex-end",
                    marginBottom: "10px", // Adds spacing between messages
                  }}
                >
                  <div
                    style={{
                      background: msg.sender === "bot" ? "#f1f1f1" : "#007bff",
                      color: msg.sender === "bot" ? "#000" : "#fff",
                      padding: "10px",
                      borderRadius: "10px",
                      maxWidth: "70%",
                      wordWrap: "break-word",
                    }}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < msg.text.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>

            {/* Footer */}
            <div
              style={{
                background: "#fff",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                marginLeft: isSidebarOpen ? "250px" : "10px",
                transition: "margin-left 0.3s ease",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                {currentQuestionIndex < questions.length &&
                  questions[currentQuestionIndex]?.suggestions?.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      style={{
                        margin: "5px",
                        padding: "10px",
                        background: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        transition: "background 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.background = "#0056b3")}
                      onMouseLeave={(e) => (e.target.style.background = "#007bff")}
                    >
                      {suggestion}
                    </button>
                  ))}

                {/* Display suggestions when email is generated */}
                {currentQuestionIndex >= questions.length && (
                  <>
                    <button
                      onClick={() => {
                        // Append a new email conversation to the message history
                        setMessages((prev) => [
                          ...prev,
                          { sender: "user", text: "New Email"},
                          { sender: "bot", text: "Let's start a new layoff email. Can you give me a number?" },
                        ]);
                        setCurrentQuestionIndex(0); // Reset to the first question
                        setResponses([]); // Clear previous responses
                        templateToUse = Math.floor(Math.random() * 10) + 1
                        console.log("templateToUse inside the New Email button: ", templateToUse)
                      }}
                      style={{
                        margin: "5px",
                        padding: "10px",
                        background: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        cursor: "pointer",
                        transition: "background 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.background = "#0056b3")}
                      onMouseLeave={(e) => (e.target.style.background = "#007bff")}
                    >
                      New Email
                    </button>
                  </>
                )}
              </div>
              <div style={{ display: "flex", marginBottom: "5px" }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Message LayoffEmailGPT"
                  className="input-box"
                />
                <button
                  onClick={() => {
                    handleSend(input);
                    setInput("");
                  }}
                  className="send-button"
                  onMouseEnter={(e) =>
                    (e.target.style.background = "#0056b3")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.background = "#007bff")
                  }
                >
                  Send
                </button>
              </div>
              <p style={{ fontSize: "12px", color: "#888", textAlign: "center" }}>
                LayoffEmailGPT can make mistakes. Check important info.
              </p>
            </div>
          </>
        )}

        {currentView === "about" && (
          <div
            style={{
              flex: 1,
              padding: "20px",
              paddingTop: "50px", // Account for the fixed navbar height
              marginLeft: isSidebarOpen ? "250px" : "10px",
              fontFamily: "Arial",
              transition: "margin-left 0.3s ease",
            }}
          >
            <h2>About</h2>
            <p>
              LayoffEmailGPT is a generative AI chatbot that creates human-like & engaging layoff emails with the help of user-supplied suggestions.<br></br>
            </p>
            <h3>Donate</h3>
            <p>
              The creator of LayoffEmailGPT is currently unemployed because of a layoff.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
