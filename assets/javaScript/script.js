
var timeEl = document.querySelector("#countdown")
var secondsLeft = 10;

function setTimer() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left!";
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval)};
        }, 1000); 
    }

    setTimer();

    var questionairre = [{

        id: 0,

        q: "In JavaScript, an Array can store which of the following?",
        a:[{text:"Integers", isCorrect: false },
           {text:"Objects", isCorrect: false },
           {text:"functions", isCorrect: false},
           {text:"All of the above", isCorrect: true},
        ]
    },
    {
        id: 1, 
        q: "Commonly used data types do NOT include:",
        a: [{text:"Booleans", isCorrect: false },
            {text:"Strings", isCorrect: false },
            {text:"Alerts", isCorrect: true},
            {text:"Numbers", isCorrect: false,}
    ]
    },
    {
        id: 2, 
        q: "The condition in an if/else staement is enclosed with in ____.",
        a: [{text:"Quotes", isCorrect: false },
            {text:"Curly Brackets", isCorrect: false },
            {text:"Parentheses", isCorrect: true},
            {text:"SquareBrackets", isCorrect: false,}
        ]
    }
]