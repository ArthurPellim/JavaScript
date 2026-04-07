let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.fillStyle = 'grey';
ctx.fillRect(0,300,400,400);
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'brown'
ctx.fillRect(140,180,100,120);
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = "yellow";
ctx.arc(300,100,40,1*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'green';
ctx.arc(50,200,30,1*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = "brown"
ctx.fillRect(45,230,10,70)
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = "lightblue"
ctx.fillRect(150,200,30,30)
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = "lightblue"
ctx.fillRect(200,200,30,30)
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = "black"
ctx.fillRect(180,250,20,50)
ctx.closePath()



// casa ctx.fillRect(140,180,100,120);

ctx.beginPath()
ctx.fillStyle = 'lightcoral';
ctx.moveTo(140,180);
ctx.lineTo(190,130);
ctx.lineTo(240,180);
ctx.fill();
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = "brown"
ctx.fillRect(350,290,10,70)
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'green';
ctx.arc(355,270,30,1*Math.PI,3.5*Math.PI);
ctx.fill();
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = "royalblue"
ctx.arc(0,300,30,1.5*Math.PI,0.5*Math.PI);
ctx.fill();
ctx.closePath()

ctx.beginPath()
ctx.fillStyle = 'royalblue'
ctx.fillRect(0,300,30,100);
ctx.fill();
ctx.closePath()

ctx.beginPath()
ctx.fillStyle ='royalblue'
ctx.fillRect(0,350,200,50);
ctx.fill();
ctx.closePath()

ctx.beginPath()
ctx.fillStyle ='royalblue'
ctx.arc(200,400,50,1.5*Math.PI,0.5*Math.PI)
ctx.fill();
ctx.closePath()