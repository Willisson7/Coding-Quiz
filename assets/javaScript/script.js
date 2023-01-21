
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
var start = true;

function quiz(id) {

    var result = document.getElementsByClassName("result");
    result[0].innerHTML = "";

    var question = document.getElementById("question");

    question.innerHTML = questionairre[id].q;

    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var option3 = document.getElementById('option3');
    var option4 = document.getElementById('option4');

    option1.innerHTML = questionairre[id].a[0].text;
    option2.innerHTML = questionairre[id].a[1].text;
    option3.innerHTML = questionairre[id].a[2].text;
    option4.innerHTML = questionairre[id].a[3].text;

    option1.innerHTML = questionairre[id].a[0].isCorrect;
    option2.innerHTML = questionairre[id].a[1].isCorrect;
    option3.innerHTML = questionairre[id].a[2].isCorrect;
    option4.innerHTML = questionairre[id].a[3].isCorrect;

    var selected = "";

    const button = document.getElementsByClassName("option");

    button[0].addEventListener("click", () => {
        if (selected == "true"){
            result[0].innerHTML = "True";
            result[0].getElementsByClassName.color = "green";  
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

