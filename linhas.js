let canvas = document.getElementById('canvas1')
let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = "red"
ctx.fillRect(1,1,50,50);
ctx.fill();
ctx.closePath()
