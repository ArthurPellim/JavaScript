const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "canguru.jpg";

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

canvas.addEventListener("mousemove", function(event) {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
});

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const largura = 75;
    const altura = 75;

    let drawX = mouseX - largura / 2;
    let drawY = mouseY - altura / 2;

    if (drawX < 0) drawX = 0;
    if (drawY < 0) drawY = 0;
    if (drawX + largura > canvas.width) drawX = canvas.width - largura;
    if (drawY + altura > canvas.height) drawY = canvas.height - altura;

    ctx.drawImage(img, drawX, drawY, largura, altura);

    requestAnimationFrame(desenhar);
}

img.onload = function() {
    desenhar();
};