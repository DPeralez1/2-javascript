/* Open your trivia.js file and start by writing pseudo-code as comments to outline the tasks you'll need to accomplish.
At the top of your trivia.js file, create global variables to simplify access to DOM objects.
Call the first variable questionDiv and select the DOM element containing the #question id.
Call the second variable answerDiv and select the DOM element containing the #answer id.
Call the third variable feedbackDiv and select the DOM element containing the #feedback id.
Create a fourth variable using let and call it currentQuestion, and give it an initial value of null. This variable will store the question that is returned from the Promise. */

const guestionDiv = document.getElementById("question");
const answerDiv = document.getElementById("answer");
const feedbackDiv = document.getElementById("feedback");
let currentQuestion = null;

function getTriviaQuestion() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = Math.floor(Math.random() * questions.length);
        const question = questions[index];
        if (index > questions.length) {
            reject('An error occurred while fetching the trivia question.');
          } else {
            resolve(question);
          }
      }, 1000); // Delay of 1 second
    });
}

function displayQuestion (triviaQuestion) {
    questionDiv.textContent = triviaQuestion.question;
    answerDiv.value = ''; 
    feedbackDiv.textContent = '';
}

document.getElementById("questionBtn").addEventListener("click", () => {
    getTriviaQuestion().then((question) => {
        currentQuestion = question;
        displayQuestion(question);
    })
    .catch((error) => {
        console.error(error);
    })
})
