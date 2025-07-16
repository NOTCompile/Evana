var numeros = [];
var nombres = [];
var fechas = [];
var cvvs = [];

var nombresList = ["JUAN LOPEZ", "MARIA CRUZ", "CARLOS RUIZ", "ANA PEREZ"];

function generar() {
    var num = "";
    for (var i = 0; i < 16; i++) {
        num += Math.floor(Math.random() * 10);
    }

    var mes = Math.floor(Math.random() * 12) + 1;
    if (mes < 10) mes = "0" + mes;
    var ano = Math.floor(Math.random() * 5) + 25;
    var fechaGen = mes + "/" + ano;

    var cvvGen = Math.floor(Math.random() * 900) + 100;

    var nombreGen = nombresList[Math.floor(Math.random() * nombresList.length)];

    document.getElementById("numero").value = num;
    document.getElementById("nombre").value = nombreGen;
    document.getElementById("fecha").value = fechaGen;
    document.getElementById("cvv").value = cvvGen;

    numeros.push(num);
    nombres.push(nombreGen);
    fechas.push(fechaGen);
    cvvs.push(cvvGen);
}

function limpiar() {
    document.getElementById("numero").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("cvv").value = "";
    document.getElementById("resultado").style.display = "none";
}

function mostrar() {
    var texto = "";
    for (var i = 0; i < numeros.length; i++) {
        texto += "Tarjeta " + (i + 1) + ":<br>";
        texto += "Numero: " + numeros[i] + "<br>";
        texto += "Nombre: " + nombres[i] + "<br>";
        texto += "Fecha: " + fechas[i] + "<br>";
        texto += "CVV: " + cvvs[i] + "<br><br>";
    }

    if (texto == "") {
        texto = "No hay datos guardados";
    }

    document.getElementById("info").innerHTML = texto;
    document.getElementById("resultado").style.display = "block";
}