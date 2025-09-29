// Part 1: Variable Declarations and Conditionals
const variableDemoBtn = document.getElementById('variable-demo-btn');
const variableOutput = document.getElementById('variable-output');

variableDemoBtn.addEventListener('click', () => {
    let number = 10;
    let message = (number > 5) ? "Number is greater than 5" : "Number is 5 or less";
    variableOutput.textContent = message;
});

// Part 2: Custom Functions
const calculateBtn = document.getElementById('calculate-btn');
const reverseBtn = document.getElementById('reverse-btn');
const functionOutput = document.getElementById('function-output');

calculateBtn.addEventListener('click', () => {
    const inputNumber = document.getElementById('function-input').value;
    functionOutput.textContent = `Square of ${inputNumber} is ${calculateSquare(inputNumber)}`;
});

reverseBtn.addEventListener('click', () => {
    const inputString = document.getElementById('string-input').value;
    functionOutput.textContent = `Reversed text: ${reverseString(inputString)}`;
});

function calculateSquare(num) {
    return num * num;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Part 3: Loop Examples
const forLoopBtn = document.getElementById('for-loop-btn');
const whileLoopBtn = document.getElementById('while-loop-btn');
const loopOutput = document.getElementById('loop-output');

forLoopBtn.addEventListener('click', () => {
    let result = '';
    for (let i = 1; i <= 5; i++) {
        result += `For Loop Count: ${i}\n`;
    }
    loopOutput.textContent = result;
});

whileLoopBtn.addEventListener('click', () => {
    let count = 1;
    let result = '';
    while (count <= 5) {
        result += `While Loop Count: ${count}\n`;
        count++;
    }
    loopOutput.textContent += result;
});

// Part 4: DOM Interactions
const changeColorBtn = document.getElementById('change-color-btn');
const addItemBtn = document.getElementById('add-item-btn');
const toggleContentBtn = document.getElementById('toggle-content-btn');
const itemList = document.getElementById('item-list');
const toggleContent = document.getElementById('toggle-content');

changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `New Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});

toggleContentBtn.addEventListener('click', () => {
    toggleContent.classList.toggle('hidden');
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
