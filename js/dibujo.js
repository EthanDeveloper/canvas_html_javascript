let dibujo = document.getElementById("dibujo");
let lienzo = dibujo.getContext("2d");
let ancho_dibujo = dibujo.width;

let btn = document.getElementById("boton");
btn.addEventListener("click", dibujarLineaConClick);

let cant_lineas = document.getElementById("cant_lineas");

let btn2 = document.getElementById("boton2");
btn2.addEventListener("click", refrescar);

function refrescar(){
	location.reload();
}

dibujarLineaConClick();

function dibujarLineaConClick(){

	let total_lineas = parseInt(cant_lineas.value);

	// console.log(total_lineas);

	let esp_lineas = ancho_dibujo/total_lineas;

	let yinicial = 0;
	let xfinal = 0;

	let lineas = total_lineas;

	for(let i = 0; i < lineas; i++ ){
	    yinicial = esp_lineas * i;
	    xfinal = esp_lineas * (i + 1);

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
}