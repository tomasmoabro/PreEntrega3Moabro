let nombreIngresado = prompt("Ingresar nombre");
alert("el nombre ingresado es" + nombreIngresado)

function conParametros(parametro1, parametro2){
console.log(parametro1 + " " + parametro2);
}

conParametros("Hola", "profes");
conParametros("Este es", "mi trabajo");

let num1 = Number(prompt("Ingrese un numer: "));
let operador = prompt("Ingrese un operador(+, -, *, /): ");
let num2 = Number(prompt("Ingrese otro numero: "));

function calculadora(primerNumero, operador, segundoNumero){
    switch (operador){
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return "Operacion inválida";
    }
}

alert(calculadora(num1, operador, num2));

const calcularPrecio = function (entradas, cantidad){
    return entradas * cantidad;
}

const calcularFecha = (entradas, cantidad) => (entradas + cantidad) * 2

let entradasSara = 2;
let cantidadEntradas = 4;

console.log('Precio: ' + calcularPrecio(entradasSara, cantidadEntradas))
console.log('Fecha: ' + calcularFecha(entradasSara, cantidadEntradas))

