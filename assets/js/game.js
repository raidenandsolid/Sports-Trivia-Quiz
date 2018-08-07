// Constant variables used in the program
const questions = 5;

//Variables used in the program
var questionBank = [];
var correctAnswers = 0;
var questionNumber = 0;
var progress = 0;
var answer = "";
var resetFlag = false;
var continueFlag = true;

$(document).ready(main);
function main() {
  init();
  /*Enable answer clicks
  The first answer field also serves as the result field which will reset
  the questions when pressed.
  */
  $("#answer1").click(function() {
    //Reset to the first question if true
    if (resetFlag===true) {
      askQuestions();
      resetFlag = false;
    } else {
      if (continueFlag===true && resetFlag===false) {
        checkAnswer($("#answer1").html());
      }
    }
  });
  $("#answer2").click(function() {
    if (continueFlag===true && resetFlag===false) {
      checkAnswer($("#answer2").html());
    }
  });
  $("#answer3").click(function() {
    if (continueFlag===true && resetFlag===false) {
      checkAnswer($("#answer3").html());
    }
  });
  $("#selectionresponse").click(function() {
      askQuestions();
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
    displayResults();
  } else {
    $("#question").html(questionBank[questionNumber].question);
    $("#answer1").html(questionBank[questionNumber].answer1);
    $("#answer2").html(questionBank[questionNumber].answer2);
    $("#answer3").html(questionBank[questionNumber].answer3);
    $("#selectionresponse").empty();
  }
  continueFlag = true;
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
  } else {
    $("#selectionresponse").html("Incorrect answer. The correct answer is: " + questionBank[questionNumber].correctAn);
  }
  /*Setup to display the next question, set flags to prevent the answer clicks
  from continuing to build the next question.
  */
  progress++;
  questionNumber++;
  continueFlag = false;
}

function displayResults() {
  //Display the results of the quiz.
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
  resetFlag = true;
}

function setBackground() {
  //Reset the background when the quiz is reset.
  document.body.style.backgroundImage = 'url(assets/images/allsports.jpg)';
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function clearFields() {
  //Clear the question and answer fields.
  progress = 0;
  questionNumber = 0;
  $("#question").empty();
  $("#answer1").empty();
  $("#answer2").empty();
  $("#answer3").empty();
  $("#selectionresponse").empty();
}
