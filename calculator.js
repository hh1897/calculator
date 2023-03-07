// JavaScript source code

let userInput = [];

// add event listeners 
for (i = 1; i <= 9; i++) {
    let number = i.toString();
    let value = document.getElementById(number).innerHTML;
    document.getElementById(number).addEventListener("click", function () { numberInput(value) });
}
document.getElementById("clear").addEventListener("click", clear());
document.getElementById("powerTo").addEventListener("click", powerTo());
document.getElementById("back").addEventListener("click", back());
document.getElementById("divide").addEventListener("click", divide());
document.getElementById("multiply").addEventListener("click", multiply());
document.getElementById("add").addEventListener("click", add());
document.getElementById("subtract").addEventListener("click", subtract());
document.getElementById("dot").addEventListener("click", dot());
document.getElementById("equals").addEventListener("click", equals());

// 
function numberInput(value) {
    let number = parseInt(value);
    userInput.push(number);
}
function clear() {

}
function powerTo() {

}
function back() {

}
function divide() {

}
function multiply() {

}
function add() {

}
function subtract() {

}
function dot() {

}
function equals() {

}