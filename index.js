/*document.querySelector("button").addEventListener("click", handleclick)

function handleclick(){
    alert("i got clicked");
}
In JavaScript, when you call a function with parentheses (), the function gets executed and returns the result to the callable.On the other hand, when you call a function without 
parentheses, 
a reference to the
 function is sent to the 
callable rather than executing the function itself */
//instead we can also use

//detecting button press 
var numberofdrumbutton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrumbutton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    
    });
}

//detecting keyboard press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}