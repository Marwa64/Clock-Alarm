var hourDegree, minuteDegree, secondDegree;

function moveHands(){
  var now = new Date();

  var hour = now.getHours();
  var hourHand = document.querySelector(".hour-hand");
  hourDegree = 90 + (hour * 30);
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  var minutes = now.getMinutes();
  var minutesHand = document.querySelector(".min-hand");
  minuteDegree = 90 + (minutes * 6);
  minutesHand.style.transform = `rotate(${minuteDegree}deg)`;

  var seconds = now.getSeconds();
  var secondsHand = document.querySelector(".second-hand");
  secondDegree = 90 + (seconds * 6);
  secondsHand.style.transform = `rotate(${secondDegree}deg)`;
  console.log(seconds);

  if (hour >= 6){
    document.querySelector("body").style.backgroundImage = "url('img/background1.jpg')";
    document.querySelector(".hour-hand").style.background = "black";
    document.querySelector(".min-hand").style.background = "black";
    document.querySelector(".clock-pivot").style.background = "black";
  }

  if (hour >= 16){
    document.querySelector("body").style.backgroundImage = "url('img/background2.jpg')";
    document.querySelector(".hour-hand").style.background = "black";
    document.querySelector(".min-hand").style.background = "black";
    document.querySelector(".clock-pivot").style.background = "black";
  }

  if (hour >= 20 || hour < 6){
    document.querySelector("body").style.backgroundImage = "url('img/background3.jpg')";
    document.querySelector(".hour-hand").style.background = "white";
    document.querySelector(".min-hand").style.background = "white";
    document.querySelector(".clock-pivot").style.background = "white";
  }
}
setInterval(moveHands, 1000);

var alarmBtn = document.querySelector("#alarmBtn");
alarmBtn.addEventListener('click', function(){
  $("#alarmModal").modal("show");
})

var alarmHour = "", alarmMinute="";

function setAlarm(){
  alarmHour = "";
  alarmMinute = "";
  var seperator = false;
  var timeSet = document.querySelector("#time").value;

  for (i = 0; i < timeSet.length; i++){
    if (timeSet[i] != ":"){
      if (seperator === false){
        alarmHour += timeSet[i];
      } else {
        alarmMinute += timeSet[i];
      }
    } else {
      seperator = true;
    }
  }
  var message = document.querySelector(".alert");
  message.innerHTML = "Alarm set to <b>" + timeSet + "</b>";
  message.style.visibility = "visible";
}

function alarm(){
  var now = new Date();
  var currentHour = now.getHours();
  var currentMinutes = now.getMinutes();
  if (alarmHour == currentHour && alarmMinute == currentMinutes){
    var sound = document.querySelector("audio");
    sound.play();
    var message = document.querySelector(".alert");
    message.innerHTML = "";
    message.style.visibility = "hidden";
  }
}
setInterval(alarm, 2000);
