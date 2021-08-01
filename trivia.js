"use strict";

const $ = selector => document.querySelector(selector);
let questions = [];
const correct = false;
let score = 0;
const answer = $("#answer");
const a = $("#a");
const b = $("#b");
const c = $("#c");
const d = $("#d");
const error = $("#error");
console.log(score);
                    
const startGame = () => {
    questions = [["What colour is Mace Windu's lightsaber?",  
                    "Purple",
                    "Yellow",
                    "Blue",
                    "Red",
                    "Purple"],
                    ["What movie does Yoda first appear?",
                    "Return of the Jedi",
                    "The Phantom Menace",
                    "The Empire Strikes Back",
                    "Revenge of the Sith",
                    "The Empire Strikes Back"],
                    ["C-3P0 is fluent in how many languages?",
                    "10 thousand",
                    "1 billion",
                    "60 million",
                    "20 million",
                    "60 million"],
                    ["What movie does Yoda first appear?",
                    "Return of the Jedi",
                    "The Phantom Menace",
                    "The Empire Strikes Back",
                    "Revenge of the Sith"],
                    ["What movie does Yoda first appear?",
                    "Return of the Jedi",
                    "The Phantom Menace",
                    "The Empire Strikes Back",
                    "Revenge of the Sith"],
                    ["What movie does Yoda first appear?",
                    "Return of the Jedi",
                    "The Phantom Menace",
                    "The Empire Strikes Back",
                    "Revenge of the Sith"],
                    ["What movie does Yoda first appear?",
                    "Return of the Jedi",
                    "The Phantom Menace",
                    "The Empire Strikes Back",
                    "Revenge of the Sith"],
                    ["What movie does Yoda first appear?",
                    "Return of the Jedi",
                    "The Phantom Menace",
                    "The Empire Strikes Back",
                    "Revenge of the Sith"],
                    ["What movie does Yoda first appear?",
                    "Return of the Jedi",
                    "The Phantom Menace",
                    "The Empire Strikes Back",
                    "Revenge of the Sith"],
                    ["What movie does Yoda first appear?",
                    "Return of the Jedi",
                    "The Phantom Menace",
                    "The Empire Strikes Back",
                    "Revenge of the Sith"]];
    $("#questionsContainer").classList.remove("hide");
    $("#start").classList.toggle("hide");
    nextQuestion()
};

const nextQuestion = () => {
    answer.value = "";
    $("#question").textContent = questions[0][0];
    a.textContent = (questions[0][1]);
    b.textContent = (questions[0][2]);
    c.textContent = (questions[0][3]);
    d.textContent = (questions[0][4]);
};

const checkAnswer = () => {
    if((answer.value).toLowerCase() == ""){
        error.textContent = "No answer was input";
    } else if((answer.value).toLowerCase() == questions[0][5].toLowerCase()){
        error.textContent = "";
        score += 1;
        console.log(score);
        questions.splice(0,1);
        nextQuestion();
    } else{
        answer.value = "";
        error.textContent = "Not a valid answer";
    }
};

const endGame = () => {
    $("#questionsContainer").classList.toggle("hide");
    
}

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#start").addEventListener("click", startGame);
    $("#submit").addEventListener("click", checkAnswer);


    
});