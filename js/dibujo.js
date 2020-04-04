let dibujo = document.getElementById("dibujo");
let lienzo = dibujo.getContext("2d");

let yinicial = 0;
let xfinal = 0;

let lineas = 500;

for(let i = 0; i < lineas; i++ ){
    yinicial = 10 * i;
    xfinal = 10 * (i + 1);

    dibujarLinea("blue", 0, yinicial, xfinal, 500);
}

function dibujarLinea(color, yinicial, yfinal, xinicial, xfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}