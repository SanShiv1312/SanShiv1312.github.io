const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript ??",
        choice1: "<script>",
        choice2: "<meta>",
        choice3: "<javascript>",
        choice4: "<link>",
        answer: 1
    },
    {
        question: "HTML stands for -",

        choice1: "HighText Machine Language",
        choice2: "HyperText and links Markup Language",
        choice3: "HyperText Markup Language",
        choice4: "None of these",
        answer: 3
    },
    {
        question: "Inside which HTML element do we put the JavaScript ??",
        choice1: "<script>",
        choice2: "<meta>",
        choice3: "<javascript>",
        choice4: "<link>",
        answer: 1
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        //GO TO THE END PAGE 
        return window.location.assign("end.html");
    }
    questionCounter++ ;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    forEach 
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
       if(!acceptingAnswers) return;

       acceptingAnswers = false;
       const selectedChoice = e.target;
       const selectedAnswer = selectedChoice.dataset["number"];
       console.log(selectedAnswer);
       getNewQuestion();
    });
});

startGame(); 
