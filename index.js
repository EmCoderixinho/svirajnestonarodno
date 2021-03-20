var buttons = document.querySelectorAll("button");

for(var i=0; i<buttons.length; i++) buttons[i].addEventListener("click", function(){

  zvuk(this.innerText);
  pritisnut(this.innerText);
})

document.addEventListener("keydown", function(event){

  zvuk(event.key);
  pritisnut(event.key);
})

function pritisnut(dugme){

  var aktivnoDugme = document.querySelector("." + dugme);

  aktivnoDugme.classList.add("pressed");
  setTimeout(function(){

    aktivnoDugme.classList.remove("pressed");
  }, 100);
}

function zvuk(dugme){

  switch (dugme) {
    case "w":
      var zvuk = new Audio('sounds/tom-1.mp3');
      zvuk.play();
    break;
    case "a":
      var zvuk = new Audio('sounds/tom-2.mp3');
      zvuk.play();
    break;
    case "s":
      var zvuk = new Audio('sounds/tom-3.mp3');
      zvuk.play();
    break;
    case "d":
      var zvuk = new Audio('sounds/tom-4.mp3');
      zvuk.play();
    break;
    case "j":
      var zvuk = new Audio('sounds/snare.mp3');
      zvuk.play();
    break;
    case "k":
      var zvuk = new Audio('sounds/crash.mp3');
      zvuk.play();
    break;
    case "l":
      var zvuk = new Audio('sounds/kick-bass.mp3');
      zvuk.play();
    break;
    default:
  }
}
