/*let result = 0;
let lastEntry = 0;
let calculatingArray = [];

const display = document.getElementById('display');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');

//adding event listner for every number
for (let number of numbers) {
    number.addEventListener('click', () => {
        if (display.innerHTML === '0') {
            display.innerHTML = number.innerHTML;
        }
        else {
            display.innerHTML += number.innerHTML;
        }
        //calculatingArray.push(number.id);
        updatingLastEntryFromDisplay();
    })
}


const remainder = document.getElementById('remainder');
const clearEntry = document.getElementById('clear-entry');
const clear = document.getElementById('clear');
const eraseLastNumber = document.getElementById('erase-last-number');
const divideOneByX = document.getElementById('divide-1-by-x');
const xSquared = document.getElementById('x-squared');
const squareRootOfX = document.getElementById('square-root-of-x');
const divide = document.getElementById('divide');
const times = document.getElementById('times');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const changeSign = document.getElementById('change-sign');
const decimal = document.getElementById('decimal');
const equale = document.getElementById('equale');



const allSelectors = document.getElementById('selectors-container').children;
for (let select of allSelectors) {
    if (select.id !== 'equale') {
        select.addEventListener('mouseover', () => {
            select.classList.add('mouse__over'); 
         })
         select.addEventListener('mouseout', () => {
            select.classList.remove('mouse__over'); 
          })
    }
    else {
        select.addEventListener('mouseover', () => {
            select.classList.add('equale__mouse__over'); 
         })
         select.addEventListener('mouseout', () => {
            select.classList.remove('equale__mouse__over'); 
          })
    }
}



clear.addEventListener('click', () => {
    display.innerHTML = '0';
    calculatingArray = [];
    lastEntry = 0;
    result = 0;
})

eraseLastNumber.addEventListener('click', () => {
    if (display.innerHTML !== '0') {
        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
    }
    if (display.innerHTML === '') {
        display.innerHTML = '0';
    }
    calculatingArray.pop();
    if (calculatingArray.length === 0) {
        calculatingArray = [];
    }
    updatingLastEntryFromDisplay();
})

decimal.addEventListener('click', () => {
    let displayStr = display.innerHTML;
    let isNumADecimal = false;
    for (let i = 0; i < displayStr.length; i++) {
        if (displayStr[i] === '.') {
            isNumADecimal = true;
            break;
        }
    }
    if (!isNumADecimal) {
        display.innerHTML += '.';
    }
    updatingLastEntryFromDisplay();
})


equale.addEventListener('click', () => {
    calculatingArray.push(lastEntry);
    display.innerHTML = getEquationResult(calculatingArray);
    //getEquationResult(calculatingArray);
})


//operators
plus.addEventListener('click', () => {
    if (!isLastEntryAnOperator()) {
        calculatingArray.push(lastEntry);
        display.innerHTML = "0";
        updatingLastEntryFromDisplay();
    }
    calculatingArray.push('+');
})
minus.addEventListener('click', () => {
    if (!isLastEntryAnOperator()) {
        calculatingArray.push(lastEntry);
        display.innerHTML = "0";
        updatingLastEntryFromDisplay();
    }
    calculatingArray.push('-');
})
times.addEventListener('click', () => {
    if (!isLastEntryAnOperator()) {
        calculatingArray.push(lastEntry);
        display.innerHTML = "0";
        updatingLastEntryFromDisplay();
    }
    calculatingArray.push('*');
})
divide.addEventListener('click', () => {
    if (!isLastEntryAnOperator()) {
        calculatingArray.push(lastEntry);
        display.innerHTML = "0";
        updatingLastEntryFromDisplay();
    }
    calculatingArray.push('/');
})



function getStringFromArray(array) {
    if (array[array.length - 1] === '.') {
        array.pop();
    }

    let stringArr = "";
    for (let i = 0; i < array.length; i++) {
        stringArr += array[i];
    }
    return stringArr;
}


function updatingLastEntryFromDisplay() {
    lastEntry = parseFloat(display.innerHTML);
}

function isLastEntryAnOperator() {
    if (!isNaN(calculatingArray[calculatingArray.length - 1])) {
        calculatingArray.pop();
        return true;
    }
    return false;
}



function getEquationResult(equationArray) {
    let equationArrayCopy = [...equationArray];
    let mulDivResult;
    for (let i = 0; i < equationArrayCopy.length; i++) {
        if (equationArrayCopy[i] === '*' || equationArrayCopy[i] === '/') {
            if (equationArrayCopy[i] === '*') {
                mulDivResult = equationArrayCopy[i - 1] * equationArrayCopy[i + 1];
            }
            if (equationArrayCopy[i] === '/') {
                mulDivResult = equationArrayCopy[i - 1] / equationArrayCopy[i + 1];
            }
            equationArrayCopy.splice(i - 1, 3, mulDivResult);
            i--;
        }
    }
    
    let resultHolder = equationArrayCopy.shift();
    while (equationArrayCopy.length !== 0) {
         switch(equationArrayCopy.shift()) {
             case '+':
                 resultHolder += equationArrayCopy.shift();
                 break;
             case '-':
                 resultHolder -= equationArrayCopy.shift();
                 break;
         }
     }
     return resultHolder;
}*/





/*let result = 0;
let lastEntry = 0;
let calculatingArray = [];

const display = document.getElementById('display');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');

//adding event listner for every number
for (let number of numbers) {
    number.addEventListener('click', () => {
        if (display.innerHTML === '0') {
            display.innerHTML = number.innerHTML;
        }
        else {
            display.innerHTML += number.innerHTML;
        }
        //calculatingArray.push(number.id);
        updatingLastEntryFromDisplay();
    })
}


const remainder = document.getElementById('remainder');
const clearEntry = document.getElementById('clear-entry');
const clear = document.getElementById('clear');
const eraseLastNumber = document.getElementById('erase-last-number');
const divideOneByX = document.getElementById('divide-1-by-x');
const xSquared = document.getElementById('x-squared');
const squareRootOfX = document.getElementById('square-root-of-x');
const divide = document.getElementById('divide');
const times = document.getElementById('times');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const changeSign = document.getElementById('change-sign');
const decimal = document.getElementById('decimal');
const equale = document.getElementById('equale');



const allSelectors = document.getElementById('selectors-container').children;
for (let select of allSelectors) {
    if (select.id !== 'equale') {
        select.addEventListener('mouseover', () => {
            select.classList.add('mouse__over'); 
         })
         select.addEventListener('mouseout', () => {
            select.classList.remove('mouse__over'); 
          })
    }
    else {
        select.addEventListener('mouseover', () => {
            select.classList.add('equale__mouse__over'); 
         })
         select.addEventListener('mouseout', () => {
            select.classList.remove('equale__mouse__over'); 
          })
    }
}



clear.addEventListener('click', () => {
    display.innerHTML = '0';
    calculatingArray = [];
    lastEntry = 0;
    result = 0;
})

eraseLastNumber.addEventListener('click', () => {
    if (display.innerHTML !== '0') {
        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
    }
    if (display.innerHTML === '') {
        display.innerHTML = '0';
    }
    calculatingArray.pop();
    if (calculatingArray.length === 0) {
        calculatingArray = [];
    }
    updatingLastEntryFromDisplay();
})

decimal.addEventListener('click', () => {
    let displayStr = display.innerHTML;
    let isNumADecimal = false;
    for (let i = 0; i < displayStr.length; i++) {
        if (displayStr[i] === '.') {
            isNumADecimal = true;
            break;
        }
    }
    if (!isNumADecimal) {
        display.innerHTML += '.';
    }
    updatingLastEntryFromDisplay();
})


equale.addEventListener('click', () => {
    calculatingArray.push(lastEntry);
    display.innerHTML = getEquationResult(calculatingArray);
    //getEquationResult(calculatingArray);
})


//operators
plus.addEventListener('click', () => {
    if (!isLastEntryAnOperator()) {
        calculatingArray.push(lastEntry);
        display.innerHTML = "0";
        updatingLastEntryFromDisplay();
    }
    calculatingArray.push('+');
})
minus.addEventListener('click', () => {
    if (!isLastEntryAnOperator()) {
        calculatingArray.push(lastEntry);
        display.innerHTML = "0";
        updatingLastEntryFromDisplay();
    }
    calculatingArray.push('-');
})
times.addEventListener('click', () => {
    if (!isLastEntryAnOperator()) {
        calculatingArray.push(lastEntry);
        display.innerHTML = "0";
        updatingLastEntryFromDisplay();
    }
    calculatingArray.push('*');
})
divide.addEventListener('click', () => {
    if (!isLastEntryAnOperator()) {
        calculatingArray.push(lastEntry);
        display.innerHTML = "0";
        updatingLastEntryFromDisplay();
    }
    calculatingArray.push('/');
})



function getStringFromArray(array) {
    if (array[array.length - 1] === '.') {
        array.pop();
    }

    let stringArr = "";
    for (let i = 0; i < array.length; i++) {
        stringArr += array[i];
    }
    return stringArr;
}


function updatingLastEntryFromDisplay() {
    lastEntry = parseFloat(display.innerHTML);
}

function isLastEntryAnOperator() {
    if (!isNaN(calculatingArray[calculatingArray.length - 1])) {
        calculatingArray.pop();
        return true;
    }
    return false;
}



function getEquationResult(equationArray) {
    let equationArrayCopy = [...equationArray];
    let resultHolder = equationArrayCopy[equationArrayCopy.length - 1];
    while (equationArrayCopy.length !== 0) {
         switch(equationArrayCopy.shift()) {
             case '+':
                 resultHolder += equationArrayCopy.shift();
                 break;
             case '-':
                 resultHolder -= equationArrayCopy.shift();
                 break;
             case '*':
                 resultHolder *= equationArrayCopy.shift();
                 break;
             case '/':
                 resultHolder /= equationArrayCopy.shift();
                 break;
         }
     }
     return resultHolder;
}
*/