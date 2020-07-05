var hourDegree = 90;
var minuteDegree = 90;
var secondDegree = 90;

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
}
setInterval(moveHands, 1000);
