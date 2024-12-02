var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
}

function handleClick() {
    this.style.color = "red";
}

// function tom_1_drum() {
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// }