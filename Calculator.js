let numberAfterOperator = 0;
let numeberBeforeOperator = 0;
let isCurrentNumberBeforeOperator = true;
let switchedNumber = false;
let lastOperator = '';
let isNumberDisplayedTheResult = false;
let isNumberDisplayedTheResultOfSpecialOperator = false;
let lastSelectClickedWasAnOperator = false;
let isDisabledModeAfterDivideByZero = false;
let lastSelectClickedWasCE = false;

const display = document.getElementById('display');
const numbers = document.getElementsByClassName('number');
const operators = document.getElementsByClassName('operator');
const overflowArrows = document.getElementsByClassName('overflow__arrow');
const openArrow = document.getElementById('arrow-open');
const closeArrow = document.getElementById('arrow-close');

const header = document.getElementById('full-header');


//adding event listner for every number
for (let number of numbers) {
    number.addEventListener('click', () => {
        if (display.innerHTML === '0' || isNumberDisplayedTheResult || switchedNumber) {
            display.innerHTML = number.innerHTML;
            display.innerHTML = getDisplayWithCommas();
        }
        else {
            display.innerHTML += number.innerHTML;
            display.innerHTML = getDisplayWithCommas();
        }
        ChangeOverflowVisiblity();

        isNumberDisplayedTheResult = false;
        isNumberDisplayedTheResultOfSpecialOperator = false;
        lastSelectClickedWasNotAnOperatorOrCE();
        switchedNumber = false;
        updatingNumberFromDisplay();
        isDisabledModeAfterDivideByZero = false;
        disablingAndRemovingDisabledFromSelectorsAfterDividingByZero();
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
            if (!isDisabledModeAfterDivideByZero || !doesSelectorNeedToBeDisabled(select.id)) {
                select.classList.add('mouse__over');
            }
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

for (let arrow of overflowArrows) {
    arrow.addEventListener('mouseover', () => {
        arrow.classList.add('overflow-arrow__mouse__over');
    })
    arrow.addEventListener('mouseout', () => {
        arrow.classList.remove('overflow-arrow__mouse__over'); 
    })
    if (arrow.id === 'arrow-open') {
        arrow.addEventListener('click', () => {
            openArrow.classList.add('overflow__arrow-hidden');
            openArrow.classList.remove('overflow__arrow-visible');
            closeArrow.classList.remove('overflow__arrow-hidden');
            closeArrow.classList.add('overflow__arrow-visible');
            display.classList.remove('header__display-other__end');
        })
    }
    else {
        arrow.addEventListener('click', () => {
            arrow.classList.add('overflow__arrow-hidden');
            arrow.classList.remove('overflow__arrow-visible');
            openArrow.classList.remove('overflow__arrow-hidden');
            openArrow.classList.add('overflow__arrow-visible');
            display.classList.add('header__display-other__end');
        })
    }
}



clear.addEventListener('click', () => {
    display.innerHTML = '0';
    resettingNumbersAndCurrentNumber(true);
    lastOperator = '';
    lastSelectClickedWasNotAnOperatorOrCE();
    isDisabledModeAfterDivideByZero = false;
    disablingAndRemovingDisabledFromSelectorsAfterDividingByZero();

    ChangeOverflowVisiblity();
})


clearEntry.addEventListener('click', () => {
    display.innerHTML = '0';
    updatingNumberFromDisplay();
    isDisabledModeAfterDivideByZero = false;
    lastSelectClickedWasCE = true;

    ChangeOverflowVisiblity();
})

eraseLastNumber.addEventListener('click', () => {
    if (display.innerHTML !== '0' && (!isNumberDisplayedTheResult)) {
        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
        display.innerHTML = getDisplayWithCommas();
    }
    if (display.innerHTML === '') {
        display.innerHTML = '0';
    }
    updatingNumberFromDisplay();
    lastSelectClickedWasNotAnOperatorOrCE();
    isDisabledModeAfterDivideByZero = false;
    disablingAndRemovingDisabledFromSelectorsAfterDividingByZero();

    ChangeOverflowVisiblity();
})

decimal.addEventListener('click', () => {
    if (!isDisabledModeAfterDivideByZero) {
        if (display.innerHTML === '0' || isNumberDisplayedTheResult || switchedNumber) {
            display.innerHTML = '0.';
        }
        else if (!display.innerHTML.includes('.')) {
            display.innerHTML += '.';
        }
        isNumberDisplayedTheResult = false;
        isNumberDisplayedTheResultOfSpecialOperator = false;
        switchedNumber = false;
        lastSelectClickedWasNotAnOperatorOrCE();
        updatingNumberFromDisplay();

        ChangeOverflowVisiblity();
    }
})

changeSign.addEventListener('click', () => {
    if (!isDisabledModeAfterDivideByZero) {
        let strDisplay = display.innerHTML;
        if (strDisplay[0] !== '-' && strDisplay !== '0') {
            display.innerHTML = "-" + strDisplay;
        }
        else if (strDisplay !== '0') {
            display.innerHTML = strDisplay.slice(1);
        }
        display.innerHTML = getDisplayWithCommas();
        lastSelectClickedWasNotAnOperatorOrCE();
        updatingNumberFromDisplay();

        ChangeOverflowVisiblity();
    }
})

divideOneByX.addEventListener('click', () => {
    if (!isDisabledModeAfterDivideByZero) {
        resultDisplay('1/x');
        lastSelectClickedWasNotAnOperatorOrCE();
        updatingNumberFromDisplay();
    }
})

xSquared.addEventListener('click', () => {
    resultDisplay('x^2');
    lastSelectClickedWasNotAnOperatorOrCE();
    updatingNumberFromDisplay();
})

squareRootOfX.addEventListener('click', () => {
    resultDisplay('#x');
    lastSelectClickedWasNotAnOperatorOrCE();
    updatingNumberFromDisplay();
})

remainder.addEventListener('click', () => {
    resultDisplay('%');
    lastSelectClickedWasNotAnOperatorOrCE();
    updatingNumberFromDisplay();
})

equale.addEventListener('click', () => {
    if (lastSelectClickedWasAnOperator && lastSelectClickedWasCE) {
        numberAfterOperator = 0;
    }
    else if (lastSelectClickedWasAnOperator) {
        numberAfterOperator = numeberBeforeOperator;
    }
    resettingNumbersAndCurrentNumber(false) //false means that the numbers (before and after) will not be restting
    resultDisplay();
    lastSelectClickedWasNotAnOperatorOrCE();
})


//operators
plus.addEventListener('click', () => {
    operatorClick('+');
})
minus.addEventListener('click', () => {
    operatorClick('-');
})
times.addEventListener('click', () => {
    operatorClick('*');
})
divide.addEventListener('click', () => {
    operatorClick('/');
})


function resultDisplay(specialOperator = '') {
    if (lastOperator === '+' && specialOperator === '') {
        numeberBeforeOperator += numberAfterOperator;
    }
    else if (lastOperator === '-' && specialOperator === '') {
        numeberBeforeOperator -= numberAfterOperator;
    }
    else if (lastOperator === '*' && specialOperator === '') {
        numeberBeforeOperator *= numberAfterOperator;
    }
    else if (lastOperator === '/' && specialOperator === '') {
        if (numberAfterOperator === 0 && numeberBeforeOperator === 0) {
            dividingByZero('bothNumsAreZero');
        }
        else if (numberAfterOperator === 0) {
            dividingByZero();
        }
        else {
            numeberBeforeOperator /= numberAfterOperator;
        }
    }

    else if (specialOperator === '1/x') {
        if (isCurrentNumberBeforeOperator) {
            if (numeberBeforeOperator === 0) {
                dividingByZero();
            }
            else {
                numeberBeforeOperator = 1 / numeberBeforeOperator;
            }
        }
        else {
            if (numberAfterOperator === 0) {
                dividingByZero();
            }
            else {
                numberAfterOperator = 1 / numberAfterOperator;
            }
        }
    }

    else if (specialOperator === 'x^2') {
        isCurrentNumberBeforeOperator ? numeberBeforeOperator *= numeberBeforeOperator : numberAfterOperator *= numberAfterOperator;
    }

    else if (specialOperator === '#x') {
        if (isCurrentNumberBeforeOperator) {
            if (numeberBeforeOperator < 0) {
                dividingByZero('squareRootOfNegative');
            }
            else {
                numeberBeforeOperator = Math.sqrt(numeberBeforeOperator);
            }
        }
        else {
            if (numberAfterOperator < 0) {
                dividingByZero('squareRootOfNegative');
            }
            else {
                numberAfterOperator = Math.sqrt(numberAfterOperator);
            }
        }
    }

    else if (specialOperator === '%') {
        isCurrentNumberBeforeOperator ? numeberBeforeOperator /= 100 : numberAfterOperator /= 100;
    }

    if (!isDisabledModeAfterDivideByZero) {
        if (specialOperator === '') {
            display.innerHTML = numeberBeforeOperator
        }
        else {
            isCurrentNumberBeforeOperator ? display.innerHTML = numeberBeforeOperator : display.innerHTML = numberAfterOperator;
            isNumberDisplayedTheResultOfSpecialOperator = true;
        }
        display.innerHTML = getDisplayWithCommas();
        isNumberDisplayedTheResult = true;

        ChangeOverflowVisiblity();
    }
}


function updatingNumberFromDisplay() {
    if (display.innerHTML === 'Cannot divide by zero' || display.innerHTML === 'Invalid input') {
        resettingNumbersAndCurrentNumber(true)
    }
    else {
        isCurrentNumberBeforeOperator ? numeberBeforeOperator = parseFloat(getDisplayWithoutCommas()) : numberAfterOperator = parseFloat(getDisplayWithoutCommas());
    }
}

function dividingByZero(errorString) {
    if (errorString === 'squareRootOfNegative') {
        display.innerHTML = 'Invalid Input';
    }
    else if (errorString === 'bothNumsAreZero') {
        display.innerHTML = 'Result is undefined';
    }
    else {
        display.innerHTML = 'Cannot divide by zero';
    }
    resettingNumbersAndCurrentNumber(true);
    lastOperator = '';
    lastSelectClickedWasNotAnOperatorOrCE();
    isDisabledModeAfterDivideByZero = true;
    disablingAndRemovingDisabledFromSelectorsAfterDividingByZero();

    ChangeOverflowVisiblity();
}

function doesSelectorNeedToBeDisabled(selectorId) {
    if (selectorId === 'clear-entry') return false;
    if (selectorId === 'clear') return false;
    if (selectorId === 'erase-last-number') return false;
    if (selectorId === 'equale') return false; //
    if (!isNaN(selectorId)) return false;

    return true;
}

function disablingAndRemovingDisabledFromSelectorsAfterDividingByZero() {
    if (isDisabledModeAfterDivideByZero) {
        for (let select of allSelectors) {
            if (doesSelectorNeedToBeDisabled(select.id)) {
                select.classList.add('disabled');
            }
        }
    }
    else {
        for (let select of allSelectors) {
            if (doesSelectorNeedToBeDisabled(select.id)) {
                select.classList.remove('disabled');
            }
        }
    }
}


function operatorClick(lastOper) {
    if (!isDisabledModeAfterDivideByZero) {
        if (lastOperator !== '' && (!isNumberDisplayedTheResult || isNumberDisplayedTheResultOfSpecialOperator)) {
            if (lastSelectClickedWasAnOperator && (lastOper === '*' || lastOper === '/')) {
                numberAfterOperator = 1;
            }
            resultDisplay();
        }
        isCurrentNumberBeforeOperator = false;
        switchedNumber = true;
        lastOperator = lastOper;
        lastSelectClickedWasAnOperator = true;
        lastSelectClickedWasCE = false;
        isNumberDisplayedTheResultOfSpecialOperator = false;
    }
}


function getDisplayWithCommas() {
    let strDisplay = getDisplayWithoutCommas();
    let start = strDisplay.length - 1 - 3;
    if (strDisplay.includes('.')) {
        start = strDisplay.indexOf('.') - 4;
    }
    let end = 0;
    if (strDisplay.includes('-')) {
        end = 1;
    }
    for (let i = start; i >= end; i -= 3) {
        strDisplay = strDisplay.slice(0, i + 1) + ',' + strDisplay.slice(i + 1);
    }
    return strDisplay;
}

function getDisplayWithoutCommas() {
    let strDisplay = display.innerHTML;
    while (strDisplay.includes(',')) {
        strDisplay = strDisplay.replace(',', '');
    }
    return strDisplay;
}



function lastSelectClickedWasNotAnOperatorOrCE() {
    lastSelectClickedWasAnOperator = false;
    lastSelectClickedWasCE = false;
}
function resettingNumbersAndCurrentNumber(resetNums) {
    isCurrentNumberBeforeOperator = true;
    switchedNumber = true;
    if (resetNums) {
        numeberBeforeOperator = 0;
        numberAfterOperator = 0;
    }
}

function ChangeOverflowVisiblity() {
    if (display.innerHTML.length > 15) {
        for (let el of overflowArrows) {
            el.classList.remove('overflow__arrow-hidden');
            el.classList.add('overflow__arrow-visible');
        }
        header.classList.remove('full__header');
        header.classList.add('full__header-with-overflow');
    }
    else {
        for (let el of overflowArrows) {
            el.classList.add('overflow__arrow-hidden');
            el.classList.remove('overflow__arrow-visible');
        }
        header.classList.add('full__header');
        header.classList.remove('full__header-with-overflow');
        display.classList.remove('header__display-other__end');
    }
}