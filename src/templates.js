const templates = [
    {
      template: (answers) => {
        return `Got it, here's what I was able to come up with for you:

          Dear Team,

          Today we are making some significant changes to the structure of our team and the design of our ` +
          `organization which will result in approximately ${answers.get("numEmployeesLaidOff")} team members leaving ${answers.get("companyName")}. ` +
          `We believe these changes are necessary because of ${answers.get("layoffReason")} and ${answers.get("numInternetMemes")} internet memes.` +
          `\n\nWe know our unique culture, and our values of being ${answers.get("corporateValueA")}, ${answers.get("corporateValueB")}, and ${answers.get("corporateValueC")}, are a reflection ` +
          `of the amazing people who work at ${answers.get("companyName")}. It ${answers.get("emotion")} me that many people I have deeply ` +
          `enjoyed working with, who I know firsthand are extremely talented, will no longer be members ` +
          `of our team at ${answers.get("companyName")}. We are infinitely grateful for your contributions, your hard ` +
          `work, and your ambition to make a positive impact in the world.
  
          ${answers.get("layoffEmailAuthor")}

          Please let me know if you'd like me to create another layoff email for you.
        `;
      },
      questions: [
        {
          question: "Hello! I'm an LLM that helps you write layoff emails\n\n" +
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
          question: "Can you give me a corporate value?",
          suggestions: ["Kind", "Smart", "Petty", "Are Right, A Lot"],
          answerKey: "corporateValueA",
        },
        {
          question: "Can you give me another corporate value?",
          suggestions: ["Smart", "Meddling", "Arbitrary", "Bias for Action"],
          answerKey: "corporateValueB",
        },
        {
          question: "Can you give me one last corporate value?",
          suggestions: ["Strive to be Earth's Best Employer", "Senseless Bureaucracy", "Creative", "Busybodying"],
          answerKey: "corporateValueC",
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
          question: "Can you give me an emotion?",
          suggestions: ["pains", "delights", "relieves", "disappoints"],
          answerKey: "emotion",
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

            I want to follow up on what we just covered at our all-company 
            ${answers.get("eventType")} and share some context.
            
            Today we are making the unfortunate and ${answers.get("difficultyLevel")} decision to 
            reduce the size of ${answers.get("companyName")}’s workforce by ${answers.get("percentageEmployeesLaidOff")}%. This means we are 
            saying goodbye to ${answers.get("numEmployeesLaidOff")} of our talented colleagues. This 
            is a decision we did not take lightly, but it is one that we have
            conviction in to better serve our users, our business and our 
            mission over the long term. 
            
            Where we are and how we got here             
             
            Our company has changed and grown significantly over the past few 
            years. We should all be really ${answers.get("emotion")} of what we’ve been able to 
            accomplish together to serve the ${answers.get("numberOfUsers")} of people who turn to 
            ${answers.get("companyName")} every day to spend time with their friends.

            At the same time, we have to face some hard truths. We grew 
            quickly and expanded our workforce even faster, increasing by 5x 
            since ${answers.get("layoffYear")}. As a result, we took on more projects and became less 
            efficient in how we operated.

            What happens next

            I’m sure all of you are anxious to know what this means for each 
            of you.

            - By ${answers.get("emailReceivedTime")}, everyone will receive an email. In your email, 
            you will learn whether or not your employment has been impacted by 
            this reduction-in-force

            - For all remaining employees, we will come back together this 
            afternoon at 4:30 p.m. PT to talk about what’s next

            How we’re taking care of our colleagues

            - 5 months of salary (plus an additional week for every full year at ${answers.get("companyName")})

            - ${answers.get("numMonthsOfBenefitContinuation")} months of benefit continuation

            Take care of yourselves and let’s look out for each other through
            this particularly challenging time.

            ${answers.get("layoffEmailAuthor")}

            Please let me know if you'd like for me to create another layoff email for you.`
        },
        questions: [
            {
                question: "Hello! I'm an LLM that helps you write layoff emails\n\n" +
                "I'll ask you a few questions and all you have to do is provide an answer. I'll do the rest." +
                "\n\nIf you can't think of anything, use one of the suggestions below" +
                "\n\nTo start, can you give me a number?",
                suggestions: ["170.357", "9,000", "300.5"],
                answerKey: "numEmployeesLaidOff",
            },
            {
              question: "Can you give me an emotion?",
              suggestions: ["proud", "embarassed", "annoyed", "aloof"],
              answerKey: "emotion"
            },
            {
              question: "Can you give me an amount?",
              suggestions: ["billions", "dozens", "hundreds", "handful"],
              answerKey: "numberOfUsers"
            },
            {
              question: "Can you give me a difficulty level?",
              suggestions: ["simple", "hard", "recurring", "mundane", "impossible"],
              answerKey: "difficultyLevel"
            },
            {
              question: "Can you give me a company name?",
              suggestions: ["ClosedAI", "FlexNet", "Cordis"],
              answerKey: "companyName"
            },
            {
              question: "Can you give me a number?",
              suggestions: ["69", "420", "10"],
              answerKey: "percentageEmployeesLaidOff",
            },
            {
              question: "Can you give me a year?",
              suggestions: ["1776", "2020", "1999"],
              answerKey: "layoffYear",
            },
            {
              question: "Can you give me a number?",
              suggestions: ["Zero", "Five", "Three"],
              answerKey: "numMonthsOfBenefitContinuation"
            },
            {
              question: "Can you give me a time of day?",
              suggestions: ["2:15 a.m. PT", "4:30 p.m. PT", "10:57 p.m. PT"],
              answerKey: "emailReceivedTime",
            },
            {
              question: "Can you give me a name?",
              suggestions: ["John Cena", "Jeff", "Lord Ellingsworth III"],
              answerKey: "layoffEmailAuthor"
            },
            {
              question: "Can you give me an event type?",
              suggestions: ["sing-along", "meeting", "nuns and nunchucks party", "jungle expedition"],
              answerKey: "eventType"
            },
        ],
    },
    {
        template: (answers) => {
            return `Got it, here's what I was able to come up with for you:

                Today I’m sharing some of the most ${answers.get("difficultyLevel")} changes we’ve made in ${answers.get("companyName")}’s history. I’ve decided to reduce the size of our team by about ${answers.get("numEmployeesLaidOff")} and let more than ${answers.get("percentageEmployeesLaidOff")} of our ${answers.get("employeeAdjective")} employees go. We are also taking a number of additional steps to become a leaner and more efficient company by cutting discretionary spending and extending our hiring freeze through ${answers.get("hiringFreezeDate")}.

                I want to ${answers.get("accountabilityAction")} accountability for these decisions and for how we got here. I know this is tough for everyone, and I’m especially ${answers.get("verb")} to those impacted.

                ${answers.get("layoffEmailAuthor")}

                Please let me know if you'd like for me to create another layoff email for you.`
        },
        questions: [
            {
              question: "Hello! I'm an LLM that helps you write layoff emails\n\n" +
              "I'll ask you a few questions and all you have to do is provide an answer. I'll do the rest." +
              "\n\nIf you can't think of anything, use one of the suggestions below" +
              "\n\nTo start, can you give me a number?",
              suggestions: ["11,000", "1,000", "20,000"],
              answerKey: "numEmployeesLaidOff",
            },
            {
              question: "Can you give me a verb?",
              suggestions: ["deny", "deflect", "take"],
              answerKey: "accountabilityAction",
            },
            {
              question: "Can you give me a name?",
              suggestions: ["Evan", "Mark", "Jason"],
              answerKey: "layoffEmailAuthor"
            },
            {
              question: "Can you give me an adjetive",
              suggestions: ["easiest", "toughest", "hardest", "dumbest", "best", "coolest"],
              answerKey: "difficultyLevel",
            },
            {
              question: "Can you give me a future date?",
              suggestions: ["2028", "1984", "the year 3000", "quarter 1"],
              answerKey: "hiringFreezeDate",
            },
            {
              question: "Can you give me a perentage?",
              suggestions: ["13%", "69%", "20%"],
              answerKey: "percentageEmployeesLaidOff",
            },
            {
              question: "Can you give me an emotion?",
              suggestions: ["indifferent", "sorry", "joyous", "ashamed"],
              answerKey: "verb",
            },
            {
              question: "Can you give me an adjective?",
              suggestions: ["talented", "worthless", "smart", "dumb"],
              answerKey: "employeeAdjective",
            },
            {
              question: "Can you give me a company name?",
              suggestions: ["Snup", "Macrosoft", "BookFace"],
              answerKey: "companyName",
            },
        ],
    },
    {
      template: (answers) => {
        return `hi all.

          today we’ll be making some org changes, including eliminating roles and beginning the consultation process in countries where required. i want to give you all the straight facts.

          as I said at the last meeting, there are three areas we’d like to address:

          strategy: reducing from teams that are off strategy, and fixing our discipline ratios.
          performance: parting ways with people with a "below" or trending towards “${answers.get("perfRating")}”.
          hierarchy: driving to ${answers.get("hierarchy")} our org to a max depth of innercore+${answers.get("maxDepth")}

          what that translates to in actual numbers of people:

          strategy: 391 people
          performance: ${answers.get("numPerformancePeople")} people
          hierarchy: ${answers.get("numManagersMoveToICRoles")} managers (with 193 moving it individual contributor roles)
          we’re also closing all the 748 roles we had open with the exception of:

          roles progressed to offer stage.
          critical operational roles
          start/accelerate roles
          key leadership roles
          none of the above points are trying to hit a specific financial target, replacing folks with ${answers.get("folksReplacedWith")}, or changing our headcount cap. they are specific to our needs around strategy, raising the bar and acting faster on performance, and ${answers.get("hierarchy")}ing our org so we can move faster and with less abstraction.

          why do this all at once instead of over time? we’re behind in our actions, and that’s not fair to the individuals who work here or the company. when we know, we should move, and there hasn’t been enough movement. we need to move to help us meet and stay ahead of the transformational moment our industry is in.

          this is the ${answers.get("difficultyLevel")} part of my job, and I fight hard against any of these considerations. we must have a very ${answers.get("levelOfExcellence")} bar of correctness for us to take any action, which takes iteration and time to get right. i always balance this with the fact that everyone here, and those that are departing, has equity in our company. it’s my job to increase that value. we believe this will help us focus and execute better to do just that.

          we’re working to give clarity to everyone as quickly, with as much context and support, as possible. you’ll receive ${answers.get("wayToCommunicate")} soon about what this means for you. if there are areas where you think we could do better, please send me a note. direct feedback makes us better, and I always act when it makes sense.

          thank you,

          ${answers.get("layoffEmailAuthor")}

          Please let me know if you'd like for me to create another layoff email for you.`
      },
      questions: [
        {
          question: "Hello! I'm an LLM that helps you write layoff emails\n\n" +
          "I'll ask you a few questions and all you have to do is provide an answer. I'll do the rest." +
          "\n\nIf you can't think of anything, use one of the suggestions below" +
          "\n\nTo start, can you give me a number?",
          suggestions: ["420", "9,000", "2.5"],
          answerKey: "numManagersMoveToICRoles",
        },
        {
          question: "Can you give me an adjetive",
          suggestions: ["easiest", "toughest", "hardest", "dumbest", "best", "coolest"],
          answerKey: "difficultyLevel",
        },
        {
          question: "Can you give me a name?",
          suggestions: ["chris", "vince mcmahon", "jack sparrow"],
          answerKey: "layoffEmailAuthor",
        },
        {
          question: "Can you give me a noun?",
          suggestions: ["developers in Nigeria", "squirrels", "AI (i.e. An Indian)"],
          answerKey: "folksReplacedWith",
        },
        {
          question: "Can you give me a level of excellence?",
          suggestions: ["low", "high", "middling", "stratospheric", "reasonable", "subbar"],
          answerKey: "levelOfExcellence",
        },
        {
          question: "Can you give me a number?",
          suggestions: ["10,000", "4", "365.12"],
          answerKey: "maxDepth",
        },
        {
          question: "Can you give me a means of communication?",
          suggestions: ["an email", "a letter by carrier pidgeon", "a letter by bicycle messenger", "a doodle", "a smoke signal"],
          answerKey: "wayToCommunicate",
        },
        {
          question: "Can you give me a perf rating",
          suggestions: ["meets", "exceeds", "below", "suckup", "deadwood", "should've been fired yesterday"],
          answerKey: "perfRating",
        },
        {
          question: "Can you give me another number?",
          suggestions: ["460", "666", "9,000"],
          answerKey: "numPerformancePeople",
        },
        {
          question: "Can you give me an adjective?",
          suggestions: ["flatten", "expand", "keep"],
          answerKey: "hierarchy",
        },
      ]
    }
  ]

export { templates }
