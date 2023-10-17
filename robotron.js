var colors = [
    "imagens/robotron-amarelo.png",
    "imagens/robotron-azul.png",
    "imagens/robotron-branco.png",
    "imagens/robotron-preto.png",
    "imagens/robotron-rosa.png",
    "imagens/robotron-vermelho.png"
];

var currentColorIndex = 0;

function changeColor(direction) {
    currentColorIndex += direction;

    if (currentColorIndex < 0) {
        currentColorIndex = colors.length - 1;
    } else if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }

    document.getElementById('myImage').src = colors[currentColorIndex];
}

document.addEventListener('DOMContentLoaded', function () {
    const properties = document.querySelectorAll('.property');

    properties.forEach(property => {
        const decrementButton = property.querySelector('.robu');
        const incrementButton = property.querySelector('.geral');
        const valueElement = property.querySelector('.value');

        let valor = 0;

        decrementButton.addEventListener('click', () => {
            if (valor > 0) {
                valor--;
                valueElement.textContent = valor;
            }
        });

        incrementButton.addEventListener('click', () => {
            if (valor < 10) {
                valor++;
                valueElement.textContent = valor;
            }
        });
    });
});
