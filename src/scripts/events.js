/**
 * Responsabilidad: gestionar los eventos
 * */ 
import { fizzBuzz } from './fizzBuzz.js';
import { showResult, clearInput } from './dom.js';

function processNumber() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const result = fizzBuzz(number);
    
    if (result.status === 'ok') {
        showResult(result.data.output);
    } else {
        showResult(result.message);
    }
    
    clearInput();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('processButton').onclick = processNumber;
    document.getElementById('numberInput').onkeydown = 
        (event) => event.key === 'Enter' && processNumber();
});

