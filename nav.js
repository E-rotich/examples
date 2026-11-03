const startScreen=document.getElementById("start-screen");
const quizScreen=document.getElementById("quiz-screen");
const resultScreen=document.getElementById("result-screen");
const startButton=document.getElementById("start-btn");
const questionText=document.getElementById("question-text");
const answersContainer=document.getElementById("answers-container");
const currentQuestionSpan=document.getElementById("current-question");
const totalQuestionSpan=document.getElementById("total-questions");
const scoreSpan=document.getElementById("score");
const finalScoreSpan=document.getElementById("final-score");
const maxScoreSpan=document.getElementById("max-score");
const resultMessage=document.getElementById("result-message");
const restartButton=document.getElementById("restart-btn");
const progressBar=document.getElementById("progress");

const quizQuestions=[
    {
        question:"What is the capital city of France",
        answers:[
            {text:"london",correct:false},
            {text:"Berlin",correct:false},
            {text:"Paris",correct:true},
            {text:"Madrid",correct:false},
        ]
    },
     {
        question:"What is the capital city of Kenya",
        answers:[
            {text:"london",correct:false},
            {text:"Bomet",correct:true},
            {text:"Paris",correct:false},
            {text:"Madrid",correct:false},
        ]
    },
     {
        question:"What is the capital city of Uganda",
        answers:[
            {text:"Kampala",correct:true},
            {text:"Berlin",correct:false},
            {text:"Paris",correct:false},
            {text:"Madrid",correct:false},
        ]
    }
]

let currentQuestionIndex = 0;
let score=0;
let answersDisabled=false;

totalQuestionSpan.textContent=quizQuestions.length;
maxScoreSpan.textContent=quizQuestions.length;

startButton.addEventListener("click",startQuiz);
restartButton.addEventListener("click",restartQuiz);

function startQuiz(){
    currentQuestionIndex=0;
    scoreSpan.textContent=0;
    score=0

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
}
function showQuestion(){
    answersDisabled=false;
    const currentQuestion=quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent=currentQuestionIndex + 1
    const progressPercent=(currentQuestionIndex/quizQuestions.length)*100;
    progressBar.style.width =progressPercent +"%";
    questionText.textContent=currentQuestion.question;
    answersContainer.innerHTML="";
    currentQuestion.answers.forEach(answer => {
        const button=document.createElement("button")
        button.textContent=answer.text
        button.classList.add("answer-btn")
        button.dataset.correct =answer.correct

        button.addEventListener("click",selectAnswer);
        answersContainer.appendChild(button)

})
}
function selectAnswer(event){
    if(answersDisabled) return
    answersDisabled =true;
    const selectedButton = event.target;
    const isCorrect=selectedButton.dataset.correct==="true"

    Array.from(answersContainer.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }else{
            button.classList.add("incorrect")
        }
    });
    if(isCorrect){
        score++;
        scoreSpan.textContent = score
    }
    setTimeout(()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex<quizQuestions.length){
            showQuestion()
        }else{
            showResults()
        }
    },1000)
}
function showResults(){
    quizScreen.classList.remove("active")
    resultScreen.classList.add("active");
    finalScoreSpan.textContent=score;
    const percentage =(score/quizQuestions.length)*100;
    if(percentage===100){
        resultMessage.textContent="perfect";
    }
    else if(percentage>=80){resultMessage.textContent="average";}
     else if(percentage>=80){resultMessage.textContent="good eff";}
      else if(percentage>=80){resultMessage.textContent="almost";}
      else{resultMessage.textContent="poor";}
}
function restartQuiz(){
    resultScreen.classList.remove("active");

    startQuiz();


}