//Call this function when Start Quiz button is clicked
function flip1() {
  document.getElementById("quizBlock1").style.display = "block";
  document.getElementById("landingPage").style.display = "none";
}

 //Call this function when any answer selected on Question 1
function flip2() {
  document.getElementById("quizBlock1").style.display = "none";
  document.getElementById("quizBlock2").style.display = "block";
}

//Call this function when any answer selected on Question 2
function flip3() {
  document.getElementById("quizBlock2").style.display = "none"; 
  document.getElementById("quizBlock3").style.display = "block";
}

//Call this function when any answer selected on Question 3
function flip4() {
  document.getElementById("quizBlock3").style.display = "none"; 
  document.getElementById("quizBlock4").style.display = "block";
}

//Call this function when any answer selected on Question 4
function flip5() {
  document.getElementById("quizBlock1").style.display = "none";
  document.getElementById("quizBlock2").style.display = "none";
  document.getElementById("quizBlock3").style.display = "none";
  document.getElementById("quizBlock4").style.display = "none";
  document.getElementById("summary").style.display = "block";
  var delayInMilliseconds = 1000;

  setTimeout(function() {
    document.getElementById("notifier").style.display = "none";
  }, delayInMilliseconds);
}

//This is called on page load
function showTimer() {
  document.getElementById("timer").textContent = ("Time Remaining: 0:00");
}


//This is called when Start Quiz button is clicked
function startTimer() {
  var seconds = 10;
  var timer = setInterval(function() {
      document.getElementById('timer').textContent="Time Remaining: " + seconds + " seconds ";
      seconds--;
      if (seconds === 0) {
        // clearInterval(timer);
        alert("Time's Up! Your score is 0!");
        confirm("Try again?") 
          if (true) {
            parent.window.location.reload(true);
          }          
      }
  }, 1000);
}

function correctAnswer() {
    document.getElementById("notifier").style.display = "block";
    document.getElementById("notifier").textContent = "Correct!"; 
}

function incorrectAnswer() {
  document.getElementById("notifier").style.display = "block";
  document.getElementById("notifier").textContent = "Incorrect!";
 
}



//research setInterval, clearInterval, and setTimeout for timer improvements


// var totalSeconds = 60;
// var minutes = parseInt(totalSeconds / 60);
// var seconds = parseInt(totalSeconds % 60);

// function startTimer() {
//   document.getElementById("timer").textContent = "Time Remaining: " + minutes + " minutes" + " " + seconds + " seconds";
// }
//   if (totalSeconds <= 0) {
//     stopTimer();
//   } else {
//     totalSeconds -= 1;
//     minutes = parseInt(totalSeconds / 60);
//     seconds = parseInt(totalSeconds % 60);
//     stopTimer("StartTimer()", 1000);
//   }
// }

// function stopTimer() {
//   document.getElementById("timer").textContent = "Out of time";
// };


