// JavaScript source code

let userInput = [];

// add event listeners 
for (i = 0; i <= 9; i++) {
    let number = i.toString();
    let value = document.getElementById(number).innerHTML;
    document.getElementById(number).addEventListener("click", function () { numberInput(value) });
}
document.getElementById("clear").addEventListener("click", function () { clear() });
document.getElementById("powerTo").addEventListener("click", function () { powerTo() });
document.getElementById("back").addEventListener("click", function () { back() });
document.getElementById("divide").addEventListener("click", function () { divide() });
document.getElementById("multiply").addEventListener("click", function () { multiply() });
document.getElementById("add").addEventListener("click", function () { add() });
document.getElementById("subtract").addEventListener("click", function () { subtract() });
document.getElementById("dot").addEventListener("click", function () { dot() });
document.getElementById("equals").addEventListener("click", function () { equals() });

// 
function numberInput(value) {
    let number = parseInt(value);
    userInput.push(number);
    showDisplay();
}
function clear() {
    userInput = [];
    showDisplay();
}
function powerTo() {
    userInput.push("**");
    showDisplay();
}
function back() {
    userInput.pop();
    showDisplay();
}
function divide() {
    userInput.push("/");
    showDisplay();
}
function multiply() {
    userInput.push("*");
    showDisplay();
}
function add() {
    userInput.push("+");
    showDisplay();
}
function subtract() {
    userInput.push("-");
    showDisplay();
}
function dot() {
    userInput.push(".");
    showDisplay();
}
function equals() {
    let result;
    try {
        result = eval(userInput.join(""));
        clear();
        userInput.push(result);
        showDisplay();
    }
    catch (err) {
        clear();
        userInput.push("ERROR");
        showDisplay();
    }
    
}
function showDisplay() {
    document.getElementById("calculatorDisplay").innerHTML = userInput.join("");
}