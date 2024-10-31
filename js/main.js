let entrada = document.querySelector(".W");
let limpiar = document.querySelector(".E");
let punto = document.querySelector(".Punto");
let igual = document.querySelector(".D");

let sumar = document.querySelector(".C");
let restar = document.querySelector(".B");
let multiplicar = document.querySelector(".A");
let dividir = document.querySelector(".F");

let numeros = document.querySelectorAll(".numero");

let operadorActual = "";
let valorAnterior = "";

numeros.forEach(boton => {
    boton.addEventListener("click", () => {
        if (entrada.value === "0") {
            entrada.value = boton.value;
        } else {
            entrada.value += boton.value;
        }
    });
});

sumar.addEventListener("click", () => {
    establecerOperador("+");
});

restar.addEventListener("click", () => {
    establecerOperador("-");
});

multiplicar.addEventListener("click", () => {
    establecerOperador("*");
});

dividir.addEventListener("click", () => {
    establecerOperador("/");
});

igual.addEventListener("click", () => {
    if (operadorActual && valorAnterior) {
        entrada.value = calcularResultado(parseFloat(valorAnterior), parseFloat(entrada.value), operadorActual);
        operadorActual = "";
        valorAnterior = "";
    }
});

limpiar.addEventListener("click", () => {
    entrada.value = "0";
    operadorActual = "";
    valorAnterior = "";
});

punto.addEventListener("click", () => {
    if (!entrada.value.includes(".")) {
        entrada.value += ".";
    }
});

function establecerOperador(operador) {
    if (entrada.value !== "") {
        valorAnterior = entrada.value;
        operadorActual = operador;
        entrada.value = "";
    }
}

function calcularResultado(valor1, valor2, operador) {
    switch (operador) {
        case "+":
            return valor1 + valor2;
        case "-":
            return valor1 - valor2;
        case "*":
            return valor1 * valor2;
        case "/":
            return valor2 !== 0 ? valor1 / valor2 : "Error";
        default:
            return valor2;
    }
}

