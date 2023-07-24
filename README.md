# Drum Kit javascript
Drum Kit Preview

A simple interactive drum kit web application that allows users to play various drum sounds by clicking on buttons or using keyboard keys.

Table of Contents
# Introduction
# Demo
# Technologies
# Features
# Usage
# Installation
# Contributing
# License
# logic explaination
Introduction
This drum kit is a fun and interactive web application that allows you to play different drum sounds. It provides a set of drum buttons that you can click with your mouse or press the corresponding keys on your keyboard to produce sounds like a real drum kit.
The project is based on the Drum Kit section of Angela Yu's Web Development Bootcamp on Udemy.

Demo
View the live demo here

Technologies
The project uses the following technologies:

HTML
CSS
JavaScript
Features
Play drums by clicking the buttons or using keyboard keys.
Produces different drum sounds for each button or key.
Visual animation when a button or key is pressed.
Usage
To use the drum kit, follow these steps:

Clone the repository: git clone https://github.com/your-username/drum-kit.git
Navigate to the project directory: cd drum-kit
Open the index.html file in your web browser.
Click on the drum buttons or press the corresponding keyboard keys (w, a, s, d, j, k, l) to play the sounds.
Enjoy creating your beats!
Installation
If you want to set up this project locally on your machine, follow these steps:

Clone the repository: git clone https://github.com/your-username/drum-kit.git
Navigate to the project directory: cd drum-kit
That's it! You can now open the index.html file in your preferred web browser.

Contributing
Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

Fork the project on GitHub.
Create a new branch with a descriptive name: git checkout -b my-new-feature
Make your changes and commit them: git commit -m "Add some feature"
Push the branch to your fork: git push origin my-new-feature
Submit a pull request to the main branch of the original repository.
License
This project is licensed under the MIT License - see the LICENSE file for details.

In this README template, replace the placeholders (e.g., your-username, your-demo-link.com) with the appropriate links and information specific to your project. The LICENSE file mentioned in the template should contain the actual license text (e.g., MIT License) for your project.

Also, make sure to include an image (drum-kit-preview.png) that shows a preview of the drum kit web application to make your README more appealing and informative.

Once you have updated the README file to reflect your actual project, you can save it as README.md in the root of your GitHub repository. This will automatically display the README content on your project's GitHub page.

# Logic explaination 
The code begins with a commented-out piece that explains the difference between calling a function with parentheses and without parentheses. This concept is important for understanding how event listeners work in the subsequent code.

The next part of the code sets up event listeners to detect both button clicks and keyboard presses.

Button Click Event Listeners:

var numberofdrumbutton = document.querySelectorAll(".drum").length;: This line selects all elements with the class "drum" and stores them in a NodeList. The variable numberofdrumbutton is assigned the length of this NodeList, which represents the number of drum buttons on the page.
The for loop iterates over each drum button to add a click event listener to each of them.
document.querySelectorAll(".drum")[i].addEventListener("click", function () { ... });: For each drum button, a click event listener is added. When a button is clicked, the function inside the event listener will be executed.
The function inside the click event listener:
var buttonInnerHTML = this.innerHTML;: It retrieves the inner text (innerHTML) of the clicked button and stores it in the buttonInnerHTML variable.
makeSound(buttonInnerHTML);: Calls the makeSound function and passes the buttonInnerHTML as an argument.
buttonAnimation(buttonInnerHTML);: Calls the buttonAnimation function and passes the buttonInnerHTML as an argument.
Keyboard Press Event Listener:

document.addEventListener("keypress", function (event) { ... });: This code adds a keypress event listener to the entire document. When any key on the keyboard is pressed, the function inside the event listener will be executed.
The function inside the keypress event listener:
makeSound(event.key);: Calls the makeSound function and passes the event.key (the pressed key) as an argument.
buttonAnimation(event.key);: Calls the buttonAnimation function and passes the event.key as an argument.
The makeSound function:

This function takes a parameter called key, which represents the key or button that was pressed (either from the click event or keyboard press event).
It uses a switch statement to determine which sound to play based on the value of key.
For each case (each button), it creates an Audio object with the corresponding sound file and plays it using the play() method.
The buttonAnimation function:

This function takes a parameter called currentkey, which represents the key or button that was pressed (either from the click event or keyboard press event).
It selects the button with the class corresponding to currentkey and adds the class "pressed" to it. This class is likely used for styling purposes to indicate that the button is pressed.
The function then uses setTimeout to remove the "pressed" class after 100 milliseconds. This creates a visual effect of the button appearing pressed and then returning to its original state after a short delay.
In summary, the JavaScript code sets up event listeners to detect both button clicks and keyboard presses. When a button is clicked or a key is pressed, it plays the corresponding drum sound and adds a visual animation to indicate the button press. The makeSound function uses a switch statement to determine which sound to play based on the pressed key, and the buttonAnimation function adds and removes the "pressed" class to create the visual effect
