for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
      playSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event){
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(buttonInnerHTML){
  switch (buttonInnerHTML) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

/* A Calculator:

function calculator(num1,num2,operator){
  return operator(num1,num2);
}

function add(num1,num2){
  return num1 + num2;
}

function sub(num1,num2){
  return num1 - num2;
}

function mul(num1,num2){
  return num1 * num2;
}

function div(num1,num2){
  return num1 / num2;
}

console.log(calculator(2,3,add));
console.log(calculator(2,3,sub));
console.log(calculator(2,3,mul));
console.log(calculator(2,3,div));
*/
