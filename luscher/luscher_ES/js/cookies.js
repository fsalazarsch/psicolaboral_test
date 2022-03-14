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

function radar(sumas){

  var azul = sumas[0];
  var verde = sumas[1];
  var amarillo = sumas[2];
  var rojo = sumas[3]

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.scale(0.75,0.75);

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


function cubo(){
  var c = document.getElementById("myCanvas2");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.scale(0.75,0.75);

  //CUBO
  ctx.rect(220, 20, 200, 200);
  ctx.rect(70, 100, 200, 200);
  ctx.moveTo(220, 20);
  ctx.lineTo(70, 100);
  ctx.moveTo(270, 100);
  ctx.lineTo(420, 20);
  ctx.moveTo(270, 300);
  ctx.lineTo(420, 220);
  ctx.moveTo(70, 300);
  ctx.lineTo(220, 220);

  //diagonales

  ctx.moveTo(220, 20);
  ctx.lineTo(270, 100);
  ctx.lineTo(70, 300);
  ctx.moveTo(270, 100);
  ctx.lineTo(420, 220);
  ctx.moveTo(270, 300);
  ctx.lineTo(420, 20);

  ctx.moveTo(270, 300);
  ctx.lineTo(70, 100);
  ctx.lineTo(420, 20);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.moveTo(70, 100);
  ctx.lineTo(220, 220);
  ctx.lineTo(420, 20);
  ctx.moveTo(420, 220);
  ctx.lineTo(220, 20);
  ctx.lineTo(70, 300);
  ctx.lineTo(420, 220);

  ctx.moveTo(270, 300);
  ctx.lineTo(220, 220);


  ctx.font = "20px Arial";
  ctx.fillText("+4", 180, 25); 
  ctx.fillText("+3", 430, 25); 
  ctx.fillText("+2", 270, 95); 
  ctx.fillText("+1", 50, 95); 
  ctx.fillText("-2", 225, 215); 
  ctx.fillText("-3", 40, 300); 
  ctx.fillText("-4", 300, 300); 
  ctx.fillText("-1", 400, 250); 
  ctx.stroke();

  //determinar puntos
  //70, 100  +1
  //270, 100  +2
  // 420, 20 +3
  // 220, 20 +4

  // 420, 220 -1
  // 220, 220 -2
  // 70, 300 -3
  // 270, 300 -4
  var referencia= {
    "1" : [70, 100],
    "2" : [270, 100],
    "3" : [420, 20],
    "4" : [220, 20],
    "-1" : [420, 220],
    "-2" : [220, 220],
    "-3" : [70, 300],
    "-4" : [270, 300]
  };

  var ptos = [];
  $('.cubo').each(function(){
    ptos.push(parseInt($(this).html()));
  });
  ptos.push( ptos[0] * -1 )
  ptos.push( ptos[1] * -1 )
  //ptos.sort();

  const str = ptos.toString();
  ptos = str.split(',');

  //console.log(ptos);
  if ((ptos[0] != "NaN") && (ptos[1] != "NaN")){
  //console.log(referencia[ptos[0]]);

  ctx.beginPath();
  //ctx.strokeStyle = "black";
  ctx.fillStyle = "darkgray";

  ctx.moveTo(referencia[ptos[0]][0], referencia[ptos[0]][1]);
  for( var i=1; i<4; i++){
  ctx.lineTo(referencia[ptos[i]][0], referencia[ptos[i]][1]);
  }
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.rect(referencia[ptos[2]][0]-7, referencia[ptos[2]][1]-7, 15, 15);
  ctx.rect(referencia[ptos[3]][0]-7, referencia[ptos[3]][1]-7, 15, 15);
  
  ctx.moveTo(referencia[ptos[0]][0], referencia[ptos[0]][1]);
  ctx.arc( referencia[ptos[0]][0], referencia[ptos[0]][1], 7,0 ,Math.PI*2, false );
  ctx.moveTo(referencia[ptos[1]][0], referencia[ptos[1]][1]);
  ctx.arc( referencia[ptos[1]][0], referencia[ptos[1]][1], 7,0 ,Math.PI*2, false );
  ctx.fill();

  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth =5
  //si es positivo 0 - 2 - 1 - 3
  //si es negativo 1 - 3 - 0 - 2

  if (ptos[0][0] == '-'){
      ctx.moveTo(referencia[ptos[1]][0], referencia[ptos[1]][1]);
      ctx.lineTo(referencia[ptos[3]][0], referencia[ptos[3]][1]);
      ctx.lineTo(referencia[ptos[0]][0], referencia[ptos[0]][1]);
      ctx.lineTo(referencia[ptos[2]][0], referencia[ptos[2]][1]); 
  }
  else{
      ctx.moveTo(referencia[ptos[0]][0], referencia[ptos[0]][1]);
      ctx.lineTo(referencia[ptos[2]][0], referencia[ptos[2]][1]);
      ctx.lineTo(referencia[ptos[1]][0], referencia[ptos[1]][1]);
      ctx.lineTo(referencia[ptos[3]][0], referencia[ptos[3]][1]);
  }

  //con una linea roja unir
  // los 2 negativos
  // su positivo con su negativo
  //hacer el poligono
  
  //if (ptos[0][0] == '-')
  //  ptso.push( ptos[0])
  //if (ptos[1][0] == '-')


  ctx.stroke();
  }
}

function grafico(columna1, columna2, lineas){
  const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Estabilidad", "Variabilidad", "", "Autonomia", "Heteromia", "","Integración", "Diferenciación"],
    datasets: [{
      label: 'Columna 1',
      data: columna1,
      borderColor: "cyan",
      backgroundColor: ["blue", "red", "", "green", "blue" ,"", "blue","green"],
      order: 1
    },
    {
      label: 'Columna 2',
      data: columna2,
      borderColor: "magenta",
      backgroundColor: ["green", "yellow", "", "red", "yellow" ,"", "red","yellow"],
      order: 2
    },
    {
      label: 'Lineas',
      data: lineas,
      borderColor: 'black',
      type: 'line',
      spanGaps: false,
      order: 0
    },

    ]
  },
  options: {
        scales: {
            y: {
                suggestedMax: 12
            }
        }
}

});
}
