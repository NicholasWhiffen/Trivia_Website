"use strict";

const $ = selector => document.querySelector(selector);
let questions = [];
let score;
let timer = null;
const answer = $("#answer");
const a = $("#a");
const b = $("#b");
const c = $("#c");
const d = $("#d");
const error = $("#error");
console.log(score);

let elapsedSeconds = 100;

const secondsDecrease = () => {
    elapsedSeconds -= 1;
    if(elapsedSeconds == 0){
        endGame();
        clearInterval(timer);
    }
    $("#seconds").textContent = elapsedSeconds;
};                    
const startGame = () => {
    score = 0;
    elapsedSeconds = 100;
    $("#seconds").classList.remove("hide");
    $("#score").classList.toggle("hide");
    timer = setInterval(secondsDecrease, 1000);
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
                    ["C-3PO is fluent in how many languages?",
                    "60 million",
                    "1 billion",
                    "6 million",
                    "20 million",
                    "6 million"],
                    ["What is the name of the Wookiees homeworld?",
                    "Dagobah",
                    "Kashyyyk",
                    "Tatooine",
                    "Coruscant",
                    "Kashyyyk"],
                    ["Who built C-3PO?",
                    "Luke Skywalker",
                    "Yoda",
                    "Obi-Wan Kenobi",
                    "Anakin Skywalker",
                    "Anakin Skywalker"],
                    ["What is the name of Boba Fett's ship?",
                    "Slave 1",
                    "Tantive IV",
                    "Razor Crest",
                    "Millennium Falcon",
                    "Slave 1"],
                    ["How old is Yoda when he dies?",
                    "600",
                    "800",
                    "1000",
                    "900",
                    "900"],
                    ["What is Chancellor Palpatine's Sith name?",
                    "Darth Vader",
                    "Darth Sidious",
                    "Darth Maul",
                    "Darth Tyranus",
                    "Darth Sidious"],
                    ["Who was Count Dooku's padawan before he left the Jedi?",
                    "Obi-Wan Kenobi",
                    "Qui-Gon-Jinn",
                    "Anakin Skywalker",
                    "Mace Windu",
                    "Qui-Gon-Jinn"],
                    ["Which planet were the clone armies produced on?",
                    "Mustafar",
                    "Jakku",
                    "Kamino",
                    "Coruscant",
                    "Kamino"],
                    ["What is the first Star Wars film where Yoda is cgi?",
                    "Empire Strikes Back",
                    "The Phantom Menace",
                    "Revenge of the Sith",
                    "Attack of the Clones",
                    "The Phantom Menace"],
                    ["What is the name of Jaba the Hutt's right hand man?",
                    "Salacious Crumb",
                    "Sebulba",
                    "Bib Fortuna",
                    "General Grievous",
                    "Bib Fortuna"],
                    ["Who freed Princess Leia from her chains at Jabba's palace?",
                    "C-3PO",
                    "Chewbacca",
                    "Luke Skywalker",
                    "R2-D2",
                    "R2-D2"],
                    ];
    shuffle(questions);
    $("#timer h2").textContent = "TIME LEFT"
    $("#questionsContainer").classList.remove("hide");
    $("#start").classList.toggle("hide");
    nextQuestion()
};

const focusAndSelect = selector => {
    const elm = $(selector);
    elm.focus();
    elm.select();
};

const shuffle = (array) => {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
  
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

const nextQuestion = () => {
    focusAndSelect("#answer");
    if (questions[0][0] == undefined || questions[0][0].length == 0){
        endGame();
    }
    answer.value = "";
    $("#question").textContent = questions[0][0];
    a.textContent = (questions[0][1]);
    b.textContent = (questions[0][2]);
    c.textContent = (questions[0][3]);
    d.textContent = (questions[0][4]);
};

const checkAnswer = () => {
    let answerValid = answerExists(answer);
    if (answerValid){
        if((answer.value).toLowerCase() == questions[0][5].toLowerCase()){
            error.textContent = "";
            score += 1;
            console.log(score);
            questions.splice(0,1);
            nextQuestion();
        } else{
            error.textContent = "";
            questions.splice(0,1);
            nextQuestion();
        }
    }else if((answer.value).toLowerCase() == ""){
        error.textContent = "No answer was input";
    }else {
        answer.value = "";
        error.textContent = "Not a valid answer";
    }
};
const answerExists = (a) =>{
    if((a.value).toLowerCase() == questions[0][1].toLowerCase() ||
    a.value.toLowerCase() == questions[0][2].toLowerCase() ||
    a.value.toLowerCase() == questions[0][3].toLowerCase() ||
    a.value.toLowerCase() == questions[0][4].toLowerCase()) {
        return true;
    } else{
        return false;
    }
};

const endGame = () => {
    $("#seconds").classList.toggle("hide");
    $("#score").classList.remove("hide");
    $("#questionsContainer").classList.toggle("hide");
    $("#score").textContent = score;
    $("#timerContainer h2").textContent = "SCORE"
    $("#start").classList.toggle("hide");

}

document.addEventListener("DOMContentLoaded", () => {
	$("#start").addEventListener("click", startGame);
    $("#submit").addEventListener("click", checkAnswer);
});