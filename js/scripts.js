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
