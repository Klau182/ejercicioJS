let titulo = document.getElementById("encabezado");
console.log(titulo.innerHTML);
let concepto = document.getElementById("concepto");
concepto.style.color = "blue";//agregando estilo css en este caso color de letra
let parrafo = document.getElementById("caracteristica");
console.log(parrafo);

let nvoParrafo = document.createElement("p");//creando un parrafo
let textoParrafo = document.createTextNode("Aqui esta el nuevo parrafo"); //creando el nuevo texto
let datoNuevo = document.getElementById("datos");

datoNuevo.appendChild(nvoParrafo);//se agrega el parrafo 
nvoParrafo.appendChild(textoParrafo);//y al parrafo se agrega el texto

function validar() {
    let nombre = document.getElementById("nombre"), value;
    let radios = document.getElementsByName("programar");
    let estudia = document.getElementById("estudiante");


}