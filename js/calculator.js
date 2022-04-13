'use strict';

const calScreen = document.getElementById('calScreen');
const calHistory = document.getElementById('calHistory');
const btnNumbers = document.querySelectorAll('.calApp-keypad-grid-btn-number');
const btnDelete = document.getElementsByClassName('calApp-keypad-grid-btn-delete')[0];
const btnOperations = document.querySelectorAll('.calApp-keypad-grid-btn-operation');
const btnReset = document.getElementsByClassName('calApp-keypad-grid-btn-reset')[0];
const btnResult = document.getElementsByClassName('calApp-keypad-grid-btn-result')[0];

for (let btnNumber of btnNumbers) {
    btnNumber.addEventListener('click', () => {
        calScreen.value += [btnNumber.value];
    })
}
for (let btnOperation of btnOperations) {
    btnOperation.addEventListener('click', () => {
        calScreen.value += btnOperation.value;
    })
}
btnResult.addEventListener('click', () => {
    calHistory.innerHTML = calScreen.value + '=';
    let result = eval(calScreen.value);
    calScreen.value = '';
    calScreen.value += result;

})
btnReset.addEventListener('click', () => {
    calScreen.value = '';
    calHistory.innerHTML = '';
})
btnDelete.addEventListener('click', () => {
    calScreen.value = calScreen.value.substring(0, calScreen.value.length - 1);
})
