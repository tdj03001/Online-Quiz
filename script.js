function flip() {
  document.getElementById("flip").style.display = "block";
}

var totalSeconds = 60;
var minutes = parseInt(totalSeconds / 60);
var seconds = parseInt(totalSeconds % 60);

function startTimer() {
  document.getElementById("timer").innerHTML = "Time Remaining: " + minutes + " minutes" + " " + seconds + " seconds";
}
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

function showTimer() {
  document.getElementById("timer").innerHTML = "Time Remaining: 0";
}