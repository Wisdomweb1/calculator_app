const display = document.querySelector('.display .content');
const input = document.querySelector('.display .input');
const output = document.querySelector('.display .output');
const keys = document.querySelectorAll('.key');

let expression = ''; // Store the current expression
let bracketCount = 0; // Keep track of open brackets

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.dataset.key;

        if (keyValue === 'clear') {
            expression = '';
            input.textContent = '';
            output.textContent = '';
            bracketCount = 0;
        } else if (keyValue === 'backspace') {
            expression = expression.slice(0, -1);
            input.textContent = expression;
        } else if (keyValue === '=') {
            try {
                // Replace "x" with "*" for calculation
                const result = eval(expression.replace(/x/g, '*'));
                output.textContent = result;
            } catch (error) {
                output.textContent = 'Error';
            }
        } else if (keyValue === 'brackets') {
            if (bracketCount % 2 === 0) { // Open bracket
                expression += '(';
                bracketCount++;
            } else { // Close bracket
                expression += ')';
                bracketCount++;
            }
            input.textContent = expression;
        } else if (keyValue === 'percent') {
            expression += '/100'; // Percentage calculation
            input.textContent = expression;
        } else {
            expression += keyValue;
            input.textContent = expression;
        }
    });
});
