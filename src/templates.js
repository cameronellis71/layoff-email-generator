const templates = [
    {
      template: (answers) => {
        return `
          Got it, here's what I was able to come up with for you:
  
          Dear Team,
  
          Today we are making some significant changes to the structure of our team and the design of our ` +
          `organization which will result in approximately ${answers[0]} team members leaving ${answers[1]}. ` +
          `We believe these changes are necessary because of ${answers[2]} and ${answers[3]} internet memes.` +
          `\n\nWe know our unique culture, and our values of being kind, smart, and creative, are a reflection ` +
          `of the amazing people who work at ${answers[1]}. It pains me that many people I have deeply ` +
          `enjoyed working with, who I know firsthand are extremely talented, will no longer be members ` +
          `of our team at ${answers[1]}. We are infinitely grateful for your contributions, your hard ` +
          `work, and your ambition to make a positive impact in the world.
  
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

export { templates }
