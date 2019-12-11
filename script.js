function flip() {
  document.getElementById("quizBlock").style.display = "block";
  document.getElementById("landingPage").style.display = "none";
}


function showTimer() {
  document.getElementById("timer").innerHTML = "Time Remaining: 0:00";
}


function startTimer() {
  var seconds = 60;
  var timer = setInterval(function() {
      document.getElementById('timer').innerHTML="Time Remaining: " + seconds + " seconds";
      seconds--;
      if (seconds <= 0) {
        clearInterval(timer);
        alert("Time's Up! Your score is 0");
          
      }
  }, 1000);
}

//research setInterval, clearInterval, and setTimeout for timer improvements


// var totalSeconds = 60;
// var minutes = parseInt(totalSeconds / 60);
// var seconds = parseInt(totalSeconds % 60);

// function startTimer() {
//   document.getElementById("timer").innerHTML = "Time Remaining: " + minutes + " minutes" + " " + seconds + " seconds";
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
//   document.getElementById("timer").innerHTML = "Out of time";
// };


