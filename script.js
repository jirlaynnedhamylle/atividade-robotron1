const colors = [
    "imagens/robotron-amarelo.png",
    "imagens/robotron-azul.png",
    "imagens/robotron-branco.png",
    "imagens/robotron-preto.png",
    "imagens/robotron-rosa.png",
    "imagens/robotron-vermelho.png"
];

let currentColorIndex = 0;

function changeColor(direction) {
    currentColorIndex = (currentColorIndex + direction + colors.length) % colors.length;
    document.getElementById('myImage').src = colors[currentColorIndex];
}

document.addEventListener('DOMContentLoaded', function () {
    const properties = document.querySelectorAll('.property');

    properties.forEach(property => {
        const decrementButton = property.querySelector('.robu');
        const incrementButton = property.querySelector('.geral');
        const valueElement = property.querySelector('.value');

        let valor = 0;

        function updateValue(change) {
            valor = Math.min(10, Math.max(0, valor + change));
            valueElement.textContent = valor;
        }

        decrementButton.addEventListener('click', () => {
            updateValue(-1);
        });

        incrementButton.addEventListener('click', () => {
            updateValue(1);
        });
    });
});
