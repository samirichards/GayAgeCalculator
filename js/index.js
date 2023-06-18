//Keep all the code specific to the index.html page in here (such as event handellers, showing results, stuff like that, keep all the higher level stuff in app.js
import * as app from './app.js';
import {calculateGayAgeCFWMScale} from "./app.js";

let selectedScale = 0
const AgeScaleRadioButtons = document.getElementsByName('AgeScales');

function checkScale(){
    for (let i = 0; i < AgeScaleRadioButtons.length; i++) {
        if (AgeScaleRadioButtons[i].checked) {
            selectedScale = Number(AgeScaleRadioButtons[i].value);
            break; // Exit the loop once a selection is found
        }
    }
}

function testCalculateAgeOnClick() {
    M.toast({html: 'I am a toast!'})
    checkScale();
    switch (Number(selectedScale)) {
        case 0:
            document.getElementById("gayAgeOutput").textContent = app.calculateGayAgeNormalScale(Number(document.getElementById("test-input").value));
            break;
        case 1:
            document.getElementById("gayAgeOutput").textContent = app.calculateGayAgeCFWMScale(Number(document.getElementById("test-input").value));
            break;
        // additional cases...
        default:
            document.getElementById("gayAgeOutput").textContent = app.calculateGayAgeNormalScale(Number(document.getElementById("test-input").value));
            break;
    }
}

const button = document.getElementById("testButton");
button.addEventListener("click", testCalculateAgeOnClick);

const inputBit = document.getElementById("test-input");
inputBit.addEventListener("change", testCalculateAgeOnClick);
inputBit.addEventListener("input", testCalculateAgeOnClick);

AgeScaleRadioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        // Function to run when the radio button selection changes
        testCalculateAgeOnClick();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components
    M.AutoInit();
    var tabs = document.querySelector('.tabs');
    M.Tabs.init(tabs);
});