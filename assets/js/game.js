// Constant variables used in the program
const questions = 5;

//Variables used in the program
var questionBank = [];
var correctAnswers = 0;
var questionNumber = 0;
var progress = 0;
var answer = "";


$(document).ready(main);
function main() {
  init();
  $("#answer1").click(function() {
    checkAnswer($("#answer1").html());
  });
  $("#answer2").click(function() {
    checkAnswer($("#answer2").html());
  });
  $("#answer3").click(function() {
    checkAnswer($("#answer3").html());
  });
}

function init() {
  var question1 = new loadQuestion(
    "Who was the winner of the 2000 Super Bowl?",
    "New England Patriots",
    "Tennessee Titans",
    "Los Angeles Rams",
    "Los Angeles Rams"
  );
  var question2 = new loadQuestion(
    "Which golfer currently holds the most major championship wins?",
    "Tiger Woods",
    "Jack Nicklaus",
    "Walter Hagen",
    "Jack Nicklaus"
  );
  var question3 = new loadQuestion(
    "What is the nickname of the Houston Rockets?",
    "Clutch City",
    "Rocket City",
    "Champ City",
    "Clutch City"
  );
  var question4 = new loadQuestion(
    "What Major League Baseball team has the most World Series championships?",
    "New York Yankees",
    "St. Louis Cardinals",
    "San Francisco Giants",
    "New York Yankees"
  );
  var question5 = new loadQuestion(
    "Which national soccer team won the World Cup in 2014?",
    "England",
    "Germany",
    "France",
    "Germany"
  );

  questionBank = [question1, question2, question3, question4, question5];
    askQuestions();
}

function askQuestions() {
  if (progress === questions) {
    $(id).click(function() {
      displayResults();
    });
  } else {
    $("#question").html(questionBank[questionNumber].question);
    $("#answer1").html(questionBank[questionNumber].answer1);
    $("#answer2").html(questionBank[questionNumber].answer2);
    $("#answer3").html(questionBank[questionNumber].answer3);
    $("#selectionresponse").empty();
  }
}
function loadQuestion(question, answer1, answer2, answer3, correctAn) {
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.correctAn = correctAn;
}

function checkAnswer(answer) {
  this.answer = answer;
  if (answer === questionBank[questionNumber].correctAn) {
    correctAnswers++;
    $("#selectionresponse").html("Correct");
    /*
    $(".questionContainer").on("click"), function() {
      $(this).toggleFunction('checkAnswer');
    });
    */
  } else {
    $("#selectionresponse").html("Incorrect answer. The correct answer is: " + questionBank[questionNumber].correctAn);
  }
    /*
    alert("Correct.");
  } else {
    alert("Incorrect answer. The correct answer is: " +
    questionBank[questionNumber].correctAn);
  }
  */
  progress++;
  questionNumber++;
  /*askQuestions();*/
  $("#selectionresponse").click(function() {
    askQuestions();
  });
}

function displayResults() {
  setBackground();
  clearFields();
  $("#question").html("You answered " + correctAnswers + " correct out of " +
    questions + " total.");
  if (correctAnswers === questions) {
    $("#answer1").html("You are a sports guru!");
  } else if (correctAnswers >=2 && correctAnswers < 4) {
    $("#answer1").html("You might qualify as a sports commentator.");
  } else {
    $("#answer1").html("At least you know sports exist, right?");
  }
  correctAnswers = 0;
  $("#selectionresponse").click();
}

function setBackground() {
  document.body.style.backgroundImage = 'url(assets/images/allsports.jpg)';
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function clearFields() {
  progress = 0;
  questionNumber = 0;
  $("#question").empty();
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#selectionresponse").empty();
}
/*
(function() {
  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
*/
