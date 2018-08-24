var num1 = parseInt(prompt("Ingrese el primer valor:"));
console.log("Numero 1: " + num1);

var operador = prompt("Ingrese la operacion a realizar:\n1 - Suma\n2 - Resta\n3 - Multiplicacion\n4 - Division");
console.log("Operacion : " + operador);

var num2 = parseInt(prompt("Ingrese el primer valor:"));
console.log("Numero 2: " + num2);

switch(operador){
    case "1": sumar(num1, num2);
                break;
    case "2": restar(num1, num2);
                break;
    case "3": multiplicacion(num1, num2);
            break;
    case "4": division(num1, num2);
            break;
}

function sumar(num1, num2){
    var resultado = num1 + num2;
    console.log(resultado);

}

function resta(num1, num2){
    var resultado = num1 - num2;
    console.log(resultado);

}

function multiplicacion(num1, num2){
    var resultado = num1 * num2;
    console.log(resultado);

}

function division(num1, num2){
    var resultado = num1 / num2;
    console.log(resultado);

}