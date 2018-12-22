
var correct= 0;
var incorrect= 0;
var noAnswer= 0;
var time= 20;
var countdown;


var mathQuestions = [
  {
    question: "Solve: 10 * 2",
      answers: {
        a: '12',
        b: '22',
        c: '20',
        d: '10'
      },
      correctAnswer: 'c'
  },
  {
    question: "Solve: 17 + 9?",
      answers: {
        a: '26',
        b: '25',
        c: '28',
        d: '27'
      },
      correctAnswer: 'a'
  }
];


$("#startButton").on("click",startButton);
function startButton(){
  clearInterval(countdown);
  countdown = setInterval(count, 1000);
}
function count(){
  time--;
  $("#timer").text("Time Remaining: "+ time);
  if(time === 0){
  // checkScore();
  }
  
}

var triviaQuestion = document.getElementById('quiz');
var results = document.getElementById('results');
var submitButton = document.getElementById('submit');

///////////////1//////////////////
for(var i=0; i< mathQuestions.length;i++){
    var showQuestions= document.createElement(("p"));
    showQuestions.textContent = mathQuestions[i];
    mathQuestions.append(showQuestions);
}

/////////////////2///////////////////
// for(var i=0; i<mathQuestions.length;i++){

//     var newDiv=$("<div>");
//     newDiv.text(mathQuestions[i]);
//     $(".quiz").append(newDiv);
// }

//////either 1 or 2////////////////////


if(userChoice = d){
    console.log("correct");
    correct++;
}



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

  
  
