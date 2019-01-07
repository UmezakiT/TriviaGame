$(document).ready(function() {

  var questionCounter = 0;
  var ansTimeout = 1000;
  var correct = 0;
  var incorrect = 0;
  var missed = 0;
  var userAns = [];
  var QA = [
  {
    question: "Solve : 10*2 ?",
    answers: ['12', '22', '20', '10','23'],
    correctAnswer0: 2
  }
  ,
  {
    question: "Solve: 5^2 ?",
    answers: ['10', '5', '20', '25'],
    correctAnswer0: 3
  }
  ,
  {
    question: "Solve: 20-5 ?",
    answers: ['10', '20', '15', '5'],
    correctAnswer0: 2
  }
  ,
  {
    question: "Solve: 1*1+1 ",
    answers: ['4', '1', '3', '2'],
    correctAnswer0: 3
  }
  ,
  
  {
    question: "Solve : 17 + 9 = ?",
    answers: ['26', '25', '28', '27'],
    correctAnswer0: 0
  }
  ,
  {
    question: "Solve 20/5?",
    answers: ['5', '4', '10', '2'],
    correctAnswer0: 1
  }
  
  ];
  
  function submitAns() {
    $("#submit").on("click", function(e) {
  
      e.preventDefault();
      userAns.length = 0;
      var userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
      userAns.push(userSelection);
      console.log(userAns);
      nextQuestion();
  
    });
  };
    
  var timeLeft = 10;
  var increment;
  
  function runTimer() {
    increment = setInterval(decrement, 1000);
  };
  
  function decrement() {
    timeLeft--;
    $("#time-left").html("Time remaining: " + timeLeft + " seconds");
    if (timeLeft === 0) {
      stopTimer();
      userAns.length = 0;		
      var userSelection = $("#responses input:radio[name=optionsRadios]:checked").val();
      userAns.push(userSelection);
      console.log(userAns);
      nextQuestion();
    };
    
  };
  
  function resetTimer() {
    timeLeft = 10;
    $("#timeLeft").html("Time remaining: " + timeLeft + " seconds");
  };
  
  function showTimer() {
    $("#timeLeft").html("Answer Review");
  };
  
  function stopTimer() {
    clearInterval(increment);
  };
  
  
  function createRadios() {
    var responseOptions = $("#responses");
  
    responseOptions.empty();
      
    for (var i = 0; i < QA[questionCounter].answers.length; i++) {
      responseOptions.append('<label><input type="radio" name="optionsRadios" id="optionsRadios2" value="' + [i] +'"><div>' + QA[questionCounter].answers[i] + '</div></input><br></label>');
    };
  };
  
  function showQuestion() {
    cleanRow();
    resetTimer();
    $(".questionX").html(QA[questionCounter].question);
  
    createRadios();
    $("#submit-div").append('<button type="submit"  id="submit">' + "Check" + '</button>');
    runTimer()
    submitAns();
  };
  
  
  function showStart() {
    $("#content").append('<a href="#" id="start-button">' + "Start" + '</a>');
  
    $("#start-button").on("click", function(event) {
      event.preventDefault();
    
      firstQuestion();
      resetTimer();
    });
  };
  
  
  function reset() {
    questionCounter = 0;
    correct = 0;
    incorrect = 0;
    missed = 0;
    userAns = [];
    resetTimer();
  };
  
  
  function showEnd() {
    cleanRow();
    $("#content").append('<h3>' + "Correct answers: " + correct + '</h3><br><h3>' + "Incorrect answers: " + incorrect + '</h3><br><h3>' + "Skipped questions: " + missed + '</h3><br><br><a href="#" id="restartButton">' + "Restart Game" + '</a>');
  
    $("#restartButton").on("click", function(event) {
      event.preventDefault();
      reset();
      cleanRow();
      showStart();
    });
  };
  
  
  function cleanRow() {
    var questionDiv = $(".questionX");
    questionDiv.empty();
  
    var responsesDiv = $("#responses");
    responsesDiv.empty();
  
    var submitDiv = $("#submit-div");
    submitDiv.empty();
  
    var contentDiv = $("#content");
    contentDiv.empty();
  
    stopTimer();
  };
  
  function checkQuestion() {
    cleanRow();
    var correctAnswer = QA[questionCounter].correctAnswer0;
    if (userAns[0] == QA[questionCounter].correctAnswer0) {
      $("#content").append('<h3>'+"Correct!" + '</h3>');
      correct++;
      showTimer();
    }
    else if (userAns[0] === undefined) {
      $("#content").append('<h3>'+"Time's up!" + '</h3><br><br><h3>' + "The correct answer was: " + QA[questionCounter].answers[correctAnswer] + '</h3>');
      missed++;
      showTimer();
    }
    else {
      $("#content").append('<h3>'+"Wrong!" + '</h3><br><br><h3>' + "The correct answer was: " + QA[questionCounter].answers[correctAnswer] + '</h3>');
      incorrect++;
      showTimer();
    };
  };
  
  
  function nextQuestion() {
    checkQuestion();
  
    questionCounter++;
  
    if (questionCounter === QA.length) {
      setTimeout(showEnd, ansTimeout);
    } 
    else {
      setTimeout(showQuestion, ansTimeout);
    };
  };
  
  function firstQuestion() {
    var startContent = $("#content");
    startContent.empty(); 
    showQuestion();
  };
  
  showStart();
  
  });
  
  
  
  // var triviaQuestion = document.getElementById('quiz');
  // var results = document.getElementById('results');
  // var submitButton = document.getElementById('submit');
  
  // ///////////////1//////////////////
  // for(var i=0; i< mathQuestions.length;i++){
  //     var showQuestions= document.createElement(("p"));
  //     showQuestions.textContent = mathQuestions[i];
  //     mathQuestions.append(showQuestions);
  // }
  
  /////////////////2///////////////////
  // for(var i=0; i<mathQuestions.length;i++){
  
  //     var newDiv=$("<div>");
  //     newDiv.text(mathQuestions[i]);
  //     $(".quiz").append(newDiv);
  // }
  
  //////either 1 or 2////////////////////
  
  
  // if(userChoice = d){
  //     console.log("correct");
  //     correct++;
  // }
  
  
  
  // generateQuiz(mathQuestions, triviaQuestion, results, submitButton);
  
  // function generateQuiz(questions, triviaQuestion, results, submitButton){
  
  //     function showQuestions(questions, triviaQuestion){
  //         var output = [];
  //         var answers;
  
  //         for(var i=0; i<questions.length; i++){
            
  //             answers = [];
  
  //             for(letter in questions[i].answers){
  
  //                 answers.push(
  //                     '<label>'
  //                         + '<input type="radio" name="question'+i+'" value="'+letter+'">'
  //                         + letter + ': '
  //                         + questions[i].answers[letter]
  //                     + '</label>'
  //                 );
  //             }
  
  //             output.push(
  //                 '<div class="question">' + questions[i].question + '</div>'
  //                 + '<div class="answers">' + answers.join('') + '</div>'
  //             );
  //         }
  
  //         triviaQuestion = output.join('quiz');
  //     }
  
  
  //     function showResults(questions, triviaQuestion, results){
  
  //         var answerContainers = triviaQuestion.querySelectorAll('.answers');
          
  //         var userAnswer = '';
  //         var numCorrect = 0;
  
  //         for(var i=0; i<questions.length; i++){
  
  //             userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
  
  //             if(userAnswer===questions[i].correctAnswer){
  
  //                 numCorrect++;
                  
  //                 answerContainers[i].style.color = 'lightgreen';
  //             }
  //             else{
  //                 answerContainers[i].style.color = 'red';
  //             }
  //         }
  
          
  //         results.innerHTML = numCorrect + ' out of ' + questions.length;
  //     }
  
     
  //     showQuestions(questions, triviaQuestion);
      
      
  //     $("submitButton").onclick = function(){
  //         showResults(questions, triviaQuestion, results);
  //     }
  
  // }
  
    
    
  