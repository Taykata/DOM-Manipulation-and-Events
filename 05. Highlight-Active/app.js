function focused() {
    
    const inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        input.addEventListener('focus', focusedInput);
        input.addEventListener('blur', bluredInput);
    }

    function focusedInput(event) {
        event.target.parentElement.classList.add('focused');
    }

    function bluredInput(event) {
        event.target.parentElement.classList.remove('focused');
    }
}