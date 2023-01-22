
var timeEl = document.querySelector("#countdown")
var secondsLeft = 10;

function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left!";

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
        };
    }, 1000);
}

setTimer();

var questionairre = [{

    id: 0,

    q: "In JavaScript, an Array can store which of the following?",
    a: [{ text: "Integers", isCorrect: false },
    { text: "Objects", isCorrect: false },
    { text: "functions", isCorrect: false },
    { text: "All of the above", isCorrect: true },
    ]
},
{
    id: 1,
    q: "Commonly used data types do NOT include:",
    a: [{ text: "Booleans", isCorrect: false },
    { text: "Strings", isCorrect: false },
    { text: "Alerts", isCorrect: true },
    { text: "Numbers", isCorrect: false, }
    ]
},
{
    id: 2,
    q: "The condition in an if/else staement is enclosed with in ____.",
    a: [{ text: "Quotes", isCorrect: false },
    { text: "Curly Brackets", isCorrect: false },
    { text: "Parentheses", isCorrect: true },
    { text: "SquareBrackets", isCorrect: false, }
    ]
}
]
var start = true;
var id = 0;
function quiz(id) {

    var result = document.getElementsByClassName("result");
    result[0].innerHTML = "";

    var question = document.getElementById("question");

    question.innerHTML = questionairre[id].q;

    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var option3 = document.getElementById('option3');
    var option4 = document.getElementById('option4');

    option1.innerText = questionairre[id].a[0].text;
    option2.innerText = questionairre[id].a[1].text;
    option3.innerText = questionairre[id].a[2].text;
    option4.innerText = questionairre[id].a[3].text;

    option1.dataset.answer = questionairre[id].a[0].isCorrect;
    option2.dataset.answer = questionairre[id].a[1].isCorrect;
    option3.dataset.answer = questionairre[id].a[2].isCorrect;
    option4.dataset.answer = questionairre[id].a[3].isCorrect;

    



    const button = document.getElementsByClassName("option");


    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', checkAnswer);

    }

    function checkAnswer(e) {
        console.log(typeof(e.target.dataset.answer));
        console.log(e.target.dataset.answer);
        if (e.target.dataset.answer == "true") {
            result[0].innerHTML = "True!";
            e.target.style.backgroundColor = "green";
        } else {
            result[0].innerHTML = "False!";
            result[0].style.color = "red";
        }
        quiz(id + 1);
    }
}


var startBegin = document.getElementById("begin")

startBegin.addEventListener("click", function(){
    document.getElementById("begin").style.display="none";
    document.getElementById("invis").classList.remove("hidden");
    quiz(id);
    }
)

