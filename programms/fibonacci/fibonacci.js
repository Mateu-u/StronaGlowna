const fibInput = document.getElementById('display');
const fibOutput = document.getElementById('result');
const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');

submitButton.addEventListener('click', () => {
    const n = fibInput.value;
    if (n < 0) {
        fibOutput.value = 'Nieprawidłowa wartość';
        return n;
    }
    fibOutput.value = fibonacci(n);
});

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


clearButton.addEventListener('click', ()=> {
    fibInput.value = '';
    fibOutput.value = ''; 
});