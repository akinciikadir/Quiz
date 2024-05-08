const questions = [
    {
        question: "JavaScript'te hangi yöntem bir dizinin başından bir öğe kaldırır?",
        answers: [
            { text: "push()", correct: false },
            { text: "pop()", correct: false },
            { text: "shift()", correct: true },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "JavaScript'te hangi operatör bir değerin türünü ve değerini kontrol eder?",
        answers: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!==", correct: false },
            { text: "!=", correct: false }
        ]
    },
    {
        question: "JavaScript'te hangi döngü yapısı belirli bir koşul sağlanana kadar çalışır?",
        answers: [
            { text: "for", correct: false },
            { text: "while", correct: true },
            { text: "do-while", correct: false },
            { text: "forEach", correct: false }
        ]
    },
    {
        question: "JavaScript'te hangi anahtar kelime bir sabit değişken tanımlar?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: true },
            { text: "static", correct: false }
        ]
    },
    {
        question: "JavaScript'te bir değişkenin türünü belirlemek için hangi operatör kullanılır?",
        answers: [
            { text: "typeof", correct: true },
            { text: "instanceof", correct: false },
            { text: "is", correct: false },
            { text: "type", correct: false }
        ]
    }
];


const questionText = document.getElementById("question");
const buttonAnswers = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let index = 0;
let score = 0;

function showQuestion() {
    questionText.innerHTML = questions[index].question;
    buttonAnswers.innerHTML = "";

    questions[index].answers.forEach(function(answer) {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.text;
        buttonAnswers.appendChild(button);
        button.addEventListener("click", function() {
            checkAnswer(answer.correct);
        });
    });
}

function checkAnswer(correct) {
    if (correct) {
        score += 20;
    } else {
        alert("Yanlış cevap");
    }
    index++;
    if (index < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    buttonAnswers.innerHTML = "";
    questionText.innerHTML = "Puanınız = " + score;
}

showQuestion();