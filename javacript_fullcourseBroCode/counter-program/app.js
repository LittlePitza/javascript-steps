// Counter Program


const DECREASE_BTN = document.getElementById("decrease-btn");
const RESET_BTN = document.getElementById("reset-btn");
const INCREASE_BTN = document.getElementById("increase-btn");

const COUNTLABEL = document.getElementById("count-label");
let count = 0;

INCREASE_BTN.onclick = function (){
    count++;
    COUNTLABEL.textContent = count;
}
DECREASE_BTN.onclick = function (){
    count--;
    COUNTLABEL.textContent = count;
}
RESET_BTN.onclick = function (){
    count = 0;
    COUNTLABEL.textContent = count;
}

