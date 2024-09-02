const quizQuestions = [
    {
      question: "What is the capital city of France?",
      a: "Paris",
      b: "Rome",
      c: "Berlin",
      correct: "a"
    },
    {
      question: "Which planet is known as the Red Planet?",
      a: "Mars",
      b: "Venus",
      c: "Jupiter",
      correct: "a"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      a: "Harper Lee",
      b: "F. Scott Fitzgerald",
      c: "J.K. Rowling",
      correct: "a"
    },
    {
      question: "What is the largest ocean on Earth?",
      a: "Pacific Ocean",
      b: "Atlantic Ocean",
      c: "Indian Ocean",
      correct: "a"
    },
    {
      question: "What is the chemical symbol for water?",
      a: "H2O",
      b: "CO2",
      c: "NaCl",
      correct: "a"
    }
  ];
  

  
const QuizlistEl = document.getElementById("quizLi")
const questionEl = document.getElementById("question")
const answer1 = document.getElementById("a")
const answer2 = document.getElementById("b")
const answer3 = document.getElementById("c")
const SubmitBtn = document.getElementById("btn")





SubmitBtn.addEventListener("click",submit)

let index = 0;
function loadQuiz(){
  
    if (index < quizQuestions.length) {
        questionEl.innerText = quizQuestions[index].question;
        answer1.innerText = quizQuestions[index].a;
        answer2.innerText = quizQuestions[index].b;
        answer3.innerText = quizQuestions[index].c;
    } else {
        // Handle the end of the quiz
        questionEl.innerText = "Quiz Completed!";
        answer1.innerText = "";
        answer2.innerText = "";
        answer3.innerText = "";
        SubmitBtn.disabled = true;  // Disable the button after the quiz ends
    }
}



function getSelected(){
    const answers = document.querySelectorAll(".answer") 

    answers.forEach((answer)=> {

        if(answer.checked) {
            
        }

    })    

}
function submit(){
    event.preventDefault()
    index ++;
  
    getSelected()  
    loadQuiz()
}

loadQuiz()

