function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function drawTextAlongArc(context, str, centerX, centerY, radius, angle) {
  var len = str.length,
    s;
  context.save();
  context.translate(centerX, centerY);
  context.rotate(-1 * angle / 2);
  context.rotate(-1 * (angle / len) / 2);
  for (var n = 0; n < len; n++) {
    context.rotate(angle / len);
    context.save();
    context.translate(0, -1 * radius);
    s = str[n];
    context.fillText(s, 0, 0);
    context.restore();
  }
  context.restore();
}

function radar(azul, verde, amarillo, rojo){

  var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();

ctx.fillStyle = 'blue';
ctx.moveTo(300, 300);
ctx.arc(300,300, 20*azul, Math.PI, Math.PI*5/4, false);
  ctx.lineTo(300, 300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.moveTo(300, 300);
ctx.arc(300,300, 20*verde, Math.PI*5/4, Math.PI*3/2, false);
  ctx.lineTo(300, 300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.moveTo(300, 300);
ctx.arc(300,300, 20*amarillo, Math.PI*3/2, Math.PI*7/4, false);
  ctx.lineTo(300, 300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.moveTo(300, 300);
ctx.arc(300,300, 20*rojo, Math.PI*7/4, Math.PI*2, false);
  ctx.lineTo(300, 300);
ctx.fill();

//context.fillStyle   = ;



ctx.fillStyle = 'black';
ctx.lineWidth = 1;

ctx.arc(300,300,20,Math.PI,0);
ctx.arc(300,300,40,Math.PI,0);
ctx.arc(300,300,60,Math.PI,0);
ctx.arc(300,300,80,Math.PI,0);
ctx.arc(300,300,100,Math.PI,0);
ctx.arc(300,300,120,Math.PI,0);
ctx.arc(300,300,140,Math.PI,0);
ctx.arc(300,300,160,Math.PI,0);
ctx.arc(300,300,180,Math.PI,0);
ctx.arc(300,300,200,Math.PI,0);
ctx.arc(300,300,220,Math.PI,0);
ctx.arc(300,300,240,Math.PI,0);

//ejes
ctx.moveTo(300, 300);
ctx.lineTo(300, 60);

ctx.moveTo(300, 300);
ctx.arc(300,300, 240, Math.PI, Math.PI*5/4, false);
ctx.lineTo(300, 300);

ctx.moveTo(300, 300);
ctx.arc(300,300, 20*12, Math.PI*3/2, Math.PI*7/4, false);
ctx.lineTo(300, 300);

ctx.moveTo(500, 300);
ctx.lineTo(540, 300);

ctx.font = "12px Arial";
ctx.fillText("12   11  10   9    8    7    6    5    4    3    2    1    0    1    2     3    4    5    6    7    8    9  10  11  12", 50, 315); 

ctx.font = "18px Arial";
ctx.fillText("        ++             = =           -  -            -  -                x x           ++ ", 50, 335);  

ctx.font = "18px Arial";
ctx.fillText("RELACIÓN                                   TAREA", 110, 360);  


ctx.strokeRect(40, 320, 515, 20);

ctx.moveTo(140, 320);
ctx.lineTo(140, 340);
ctx.moveTo(240, 320);
ctx.lineTo(240, 340);
ctx.moveTo(400, 320);
ctx.lineTo(400, 340);
ctx.moveTo(500, 320);
ctx.lineTo(500, 340);
ctx.moveTo(300, 320);
ctx.lineTo(300, 340);

ctx.textAlign = 'left';
ctx.font = "bold 14px Arial";
drawTextAlongArc(ctx, '   Capacidad       Disposicion    Perseverancia      Energía     ', 300, 300, 225, Math.PI);


ctx.font = "28px Arial";
ctx.fillText("I₁", 50, 200);  

ctx.font = "28px Arial";
ctx.fillText("P₂", 180, 60);  

ctx.font = "28px Arial";
ctx.fillText("D₃", 380, 60);  

ctx.font = "28px Arial";
ctx.fillText("O₄", 530, 200);  
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(300,300, 160, Math.PI, Math.PI*5/4, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(300,300, 180, Math.PI*5/4, Math.PI*3/2, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(300,300, 160, Math.PI*3/2, Math.PI*7/4, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(300,300, 160, Math.PI*3/2, Math.PI*7/4, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(300,300, 200, Math.PI*7/4, Math.PI*2, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(300,300, 100, Math.PI*7/4, Math.PI*2, false);
ctx.stroke();
ctx.beginPath();
ctx.arc(300,300, 60, Math.PI, Math.PI*7/4, false);
ctx.stroke();
}

/*context.font = '30pt Calibri';
context.textAlign = 'center';
context.fillStyle = 'blue';
context.strokeStyle = 'blue';
context.lineWidth = 4;
context.stroke();*/