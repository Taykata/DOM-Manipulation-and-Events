function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        const gradientBoxWidth = event.target.clientWidth;
        const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
        const percentage = Math.floor(positionOfTheMouse * 100);
        result.textContent = percentage + '%';
    }

    function gradientOut() {
        result.textContent = '';
    }
}