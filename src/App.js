import React, { useState, useRef, useEffect } from "react";

function App() {
  // Predefined list of questions with unique suggestions
  const questions = [
    { question: "Hello! I'm a chatbot that can help you write a layoff email\n\n" +
      "I'll ask you a few questions and all you have to do is provide an answer. I'll do the rest. " +
      "\n\nIf you can't think of anything, use one of the suggestions" +
      "\n\nTo start, can you give me a number?", suggestions: ["10,000", "1,000", "5,000"] },
    { question: "Can you give me a company name?", suggestions: ["Snap", "Microsoft", "TikTok"] },
    { question: "Can you give me a reason for the layoff?", suggestions: ["conflict in the Middle East", "macroeconomic headwinds", "Mercury in retrograde"] },
    { question: "Can you give me a number?", suggestions: ["10,000", "1,000", "5,000"] },
    { question: "Can you give me a name?", suggestions: ["Evan", "Jeff", "Sundar"]}
  ];

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
      // If no more questions, display the summary
      const answers = responses.concat(inputText);

      const generatedEmail = "Got it, here's what I was able to come up with for you:\n\n" +
      "Dear Team,\n\n" +
      "Today we are making some significant changes to the structure of our team and the design of our organization " +
      "which will result in aproximately " + answers[0] + " team members leaving " + answers[1] + ". We believe " +
      "these changes are necessary because of " + answers[2] + " and " + answers[3] + " internet memes." +
      "\n\n" +
      "We know our unique culture, and our values of being kind, smart, and creative, are a reflection of the " +
      "amazing people who work at " + answers[1] + ". It pains me that many people I have deeply enjoyed working" +
      " with, who I know firsthand are extremely talented, will no longer be members of our team at Snap. We are" +
      " infinitely grateful for your contributions, your hard work, and your ambition to make a positive impact" +
      " in the world." +
      "\n\n" +
      answers[4] +
      "\n\n\nPlease let me know if you'd like me to create another layoff email for you"

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
    <div style={{ padding: "20px", width: "80%", maxWidth: "800px", margin: "auto", fontFamily: "Arial", height: "85vh", display: "flex", flexDirection: "column" }}>
      <div style={{ border: "1px solid #ccc", padding: "10px", flex: "1", overflowY: "scroll" }}>
      {messages.map((msg, index) => (
        <div key={index} style={{ textAlign: msg.sender === "bot" ? "left" : "right" }}>
          <p style={{
            background: msg.sender === "bot" ? "#f1f1f1" : "#007bff",
            color: msg.sender === "bot" ? "#000" : "#fff",
            display: "inline-block",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "70%",
          }}>
            {/* Replace newlines with <br /> */}
            {msg.text.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < msg.text.split("\n").length - 1 && <br />} {/* Add a line break between lines */}
              </span>
            ))}
          </p>
        </div>
      ))}
        {/* Empty div to serve as the scroll anchor */}
        <div ref={chatEndRef}></div>
      </div>

      {/* Suggestion Buttons */}
      {currentQuestionIndex < questions.length && (
        <div style={{ marginTop: "10px" }}>
          {questions[currentQuestionIndex]?.suggestions?.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                margin: "5px",
                padding: "10px",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {/* Input Box for User-Entered Text */}
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Handles "Enter" key press
          placeholder="Type your response here..." // Hint inside the text box
          style={{ width: "80%", padding: "10px" }}
        />
        <button
          onClick={() => {
            handleSend(input);
            setInput("");
          }}
          style={{ padding: "10px", marginLeft: "10px" }}
        >
          Send
        </button>
      </div>

      {/* Text below the input box */}
      <p style={{ fontSize: "12px", color: "#888", textAlign: "center", marginTop: "5px" }}>
        LayoffEmailGenerator can make mistakes. Check important info.
      </p>
    </div>
  );
}

export default App;
