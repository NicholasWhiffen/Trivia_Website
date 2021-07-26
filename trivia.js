"use strict";

const $ = selector => document.querySelector(selector);

const questions = [["What is the name of Mario's hat in Super Mario Odyssey?\nA. Hatty\nB. Cappy\n C. Charlie\n D. Dr. Hat", "B"]]

const questionsContainer = document.getElementById("questionsContainer");
const startButton = document.getElementById("start");

const askQuestion = () => {

    
    questionsContainer.classList.remove("hide");
    startButton.classList.toggle("hide");

    let question = questions[0][0];
    const askQuestion = document.createTextNode(question);
    const questionP = $("#question").querySelector("p");
    questionP.innerText = askQuestion;

}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#start").addEventListener("click", askQuestion);
});