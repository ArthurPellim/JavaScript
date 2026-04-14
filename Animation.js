let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const raio = 25;

    canvas.addEventListener("mousemove", function(event) {
        const rect = canvas.getBoundingClientRect();

        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
    });

    function desenhar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Impedir que o círculo saia do canvas
        let x = mouseX;
        let y = mouseY;

        if (x - raio < 0) x = raio;
        if (y - raio < 0) y = raio;
        if (x + raio > canvas.width) x = canvas.width - raio;
        if (y + raio > canvas.height) y = canvas.height - raio;

        // Desenhar círculo (centralizado no mouse)
        ctx.beginPath();
        ctx.arc(x, y, raio, 0, Math.PI * 2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();

        requestAnimationFrame(desenhar);
    }