// declared global variables
var timeEl = document.querySelector("#countdown")
var secondsLeft = 10;
var score = 0;
var startBegin = document.getElementById("begin")
var id = 0;
var questionaire = [{

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
    { text: "Numbers", isCorrect: false },
    ]
},
{
    id: 2,
    q: "The condition in an if/else statement is enclosed within ____.",
    a: [{ text: "Quotes", isCorrect: false },
    { text: "Curly Brackets", isCorrect: false },
    { text: "Parentheses", isCorrect: true },
    { text: "SquareBrackets", isCorrect: false, }
    ]
}
]
// declared functions
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left!";

        if (secondsLeft === 0) {
            quizScore();
            clearInterval(timerInterval)
        };
    }, 1000);
}

function quizScore() {

    document.getElementById("scoreTotal").innerHTML = score;

}

function quiz(id) {
    // check to see if id is greater than last item in array
    console.log(id, questionaire.length - 1);
    if (id > questionaire.length - 1) {
        return;
    }
    var result = document.getElementsByClassName("result");
    result[0].innerHTML = "";

    var question = document.getElementById("question");

    question.innerHTML = questionaire[id].q;

    // console.log("questionaire[id] " + JSON.stringify.questionaire[id])

    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var option3 = document.getElementById('option3');
    var option4 = document.getElementById('option4');

    option1.innerText = questionaire[id].a[0].text;
    option2.innerText = questionaire[id].a[1].text;
    option3.innerText = questionaire[id].a[2].text;
    option4.innerText = questionaire[id].a[3].text;

    // option1.style.backgroundColor("tomato");
    // option2.style.backgroundColor("tomato");
    // option3.style.backgroundColor("tomato");
    // option4.style.backgroundColor("tomato");

    option1.dataset.answer = questionaire[id].a[0].isCorrect;
    option2.dataset.answer = questionaire[id].a[1].isCorrect;
    option3.dataset.answer = questionaire[id].a[2].isCorrect;
    option4.dataset.answer = questionaire[id].a[3].isCorrect;

    const button = document.getElementsByClassName("option");

    for (var i = 0; i < button.length; i++) {

        button[i].addEventListener('click', checkAnswer);

    }


    function checkAnswer(e) {
        console.log(typeof (e.target.dataset.answer));
        console.log(e.target.dataset.answer);

        if (e.target.dataset.answer == "true") {
            score++;
            console.log("test", score)
            result[0].innerHTML = "Correct!";
            e.target.style.backgroundColor = "green";
        } else {
            result[0].innerHTML = "Incorrect!";
            result[0].style.color = "red";
        }
        setTimeout(function () {
            quiz(id + 1);
        }, 2000);
    }
}


// add event listener
startBegin.addEventListener("click", function () {
    setTimer();
    document.getElementById("begin").style.display = "none";
    document.getElementById("invis").classList.remove("hidden");
    quiz(id);
}
)
