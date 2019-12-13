//Call this function when Start Quiz button is clicked
function flip1() {
  document.getElementById("quizBlock1").style.display = "block";
  document.getElementById("landingPage").style.display = "none";
};

 //Call this function when any answer selected on Question 1
function flip2() {
  document.getElementById("quizBlock1").style.display = "none";
  document.getElementById("quizBlock2").style.display = "block";
};

//Call this function when any answer selected on Question 2
function flip3() {
  document.getElementById("quizBlock2").style.display = "none"; 
  document.getElementById("quizBlock3").style.display = "block";
};

//Call this function when any answer selected on Question 3
function flip4() {
  document.getElementById("quizBlock3").style.display = "none"; 
  document.getElementById("quizBlock4").style.display = "block";
};

//Call this function when any answer selected on Question 4
function flip5() {
  document.getElementById("quizBlock1").style.display = "none";
  document.getElementById("quizBlock2").style.display = "none";
  document.getElementById("quizBlock3").style.display = "none";
  document.getElementById("quizBlock4").style.display = "none";
  document.getElementById("summary").style.display = "block";
  // startTimer().clearInterval(timer);  I was trying to access the "timer" variable in startTimer() so I could stop the clock when flip5() ran. flip5() runs when any button on the 4th card is clicked.
  var delayInMilliseconds = 1000;

  setTimeout(function() {
    document.getElementById("notifier").style.display = "none";
  }, delayInMilliseconds);
  // return true;
};

//This is called on page load
function showTimer() {
  document.getElementById("timer").textContent = ("Time Remaining: 0:00");
};



//This is called when Start Quiz button is clicked
function startTimer() {
  var seconds = 60;
  var timer = setInterval(function() {
    document.getElementById("timer").textContent="Time Remaining: " + seconds + " seconds ";
    seconds--;
      if (seconds === 0) {
        clearInterval(timer);
        flip5(); //because of the delayInMilliseconds where this function is declared above, the alert immediately below here runs before the "summary" card shows up.
        alert("Time's Up! Your score is 2!"); //somehow this alert always comes up when the timer is at 2 seconds, then when the alert is cleared it drops to 1 second...
    
    var delayInMilliseconds = 10000;
    setTimeout(function() {
      confirm("Thanks for playing! Try again?")
          parent.window.location.reload(true);
      
  }, delayInMilliseconds);
  
  }
}, 1000);

};

function correctAnswer() {
    document.getElementById("notifier").style.display = "block";
    document.getElementById("notifier").textContent = "Previous answer correct!"; 
};

function incorrectAnswer() {
  document.getElementById("notifier").style.display = "block";
  document.getElementById("notifier").textContent = "Previous answer incorrect!";
 
};