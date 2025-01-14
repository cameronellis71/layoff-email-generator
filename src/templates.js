const templates = [
    {
      template: (answers) => {
        return `Got it, here's what I was able to come up with for you:

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
    {
        template: (answers) => {
            return `Got it, here's what I was able to come up with for you:

            I want to follow up on what we just covered at out all-company meeting and share some context.

            Today we are making the unfortunate and difficult decision to reduce the size of Discord’s workforce by 17%. This means we are saying goodbye to ${answers[0]} of our talented colleagues. This is a decision we did not take lightly, but it is one that we have conviction in to better serve our users, our business and our mission over the long term.

            Where we are and how we got here

            Our company has changed and grown significantly over the past few years. We should all be really proud of what we’ve been able to accomplish together to serve the millions of people who turn to Discord every day to spend time with their friends.

            At the same time, we have to face some hard truths. We grew quickly and expanded our workforce even faster, increasing by 5x since 2020. As a result, we took on more projects and became less efficient in how we operated.

            Today, we are increasingly clear on the need to sharpen our focus and improve the way we work together to bring more agility to our organization. This is what largely drove the decision to reduce the size of our workforce. While difficult, I am confident this will put us in the best position to continue building a strong and profitable business that delivers amazing products for our users and supports our mission for years to come.

            What happens next

            I’m sure all of you are anxious to know what this means for each of you.

            - By ${answers[0]}, everyone will receive an email. In your email, you will learn whether or not your employment has been impacted by this reduction-in-force

            - Leadership will hold a meeting with departing team members at 11:00 a.m. PT to discuss next steps

            - For all remaining employees, we will come back together this afternoon at 1:00 p.m. PT to talk about what’s next

            How we’re taking care of our colleagues

            It is incredibly important to me that we support departing team members through this difficult time and provide them with a sizable runway as they transition into future employment. To that end, we are offering them:

            - ${answers[2]} months of salary (plus an additional week for every full year at Discord)

            - Five months of benefit continuation

            Take care of yourselves and let’s look out for each other through this particularly challenging time.

            ${answers[3]}
            `
        },
        questions: [
            {
                question: "Hello! I'm a chatbot that helps you write layoff emails\n\n" +
                "I'll ask you a few questions and all you have to do is provide an answer. I'll do the rest." +
                "\n\nIf you can't think of anything, use one of the suggestions below" +
                "\n\nTo start, can you give me a number?",
                suggestions: ["170", "1,000", "300"],
                answerKey: "numEmployeesLaidOff",
            },
            {
                question: "Can you give me a time of day?",
                suggestions: ["2:00 a.m. PT", "10:30 a.m. PT", "5:00 p.m. PT"],
                answerKey: "emailReceivedTime"
            },
            {
                question: "Can you give me a number?",
                suggestions: ["2", "4", "5"],
                answerKey: "monthsOfSalary"
            },
            {
                question: "Can you give me a name?",
                suggestions: ["Evan", "Jeff", "Jason"],
                answerKey: "layoffEmailAuthor"
            },
        ],
    },
    {
        template: (answers) => {
            return `Got it, here's what I was able to come up with for you:

                Today I’m sharing some of the most difficult changes we’ve made in Meta’s history. I’ve decided to reduce the size of our team by about ${answers[2]} and let more than ${answers[0]} of our talented employees go. We are also taking a number of additional steps to become a leaner and more efficient company by cutting discretionary spending and extending our hiring freeze through Q1.

                I want to take accountability for these decisions and for how we got here. I know this is tough for everyone, and I’m especially sorry to those impacted.

                ${answers[1]}
            `
        },
        questions: [
            {
                question: "Hello! I'm a chatbot that helps you write layoff emails\n\n" +
                "I'll ask you a few questions and all you have to do is provide an answer. I'll do the rest." +
                "\n\nIf you can't think of anything, use one of the suggestions below" +
                "\n\nTo start, can you give me a number?",
                suggestions: ["11,000", "1,000", "20,000"],
                answerKey: "numEmployeesLaidOff",
            },
            {
                question: "Can you give me a name?",
                suggestions: ["Evan", "Mark", "Jason"],
                answerKey: "layoffEmailAuthor"
            },
            {
                question: "Can you give me a perentage?",
                suggestions: ["13%", "69%", "20%"],
                answerKey: "percentageEmployeesLaidOff",
            },
            {
                question: "Can you give me a company name?",
                suggestions: ["Snup", "Macrosoft", "BookFace"],
                answerKey: "companyName",
            },
        ],
    },
  ]

export { templates }
