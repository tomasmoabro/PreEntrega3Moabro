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

let persona = {
    nombre: "Tomas",
    apellido: "Moabro",
    Dni: "44740695"
};

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.Dni)

const fechas = [
    { nombre: "SaraLandry", precio: 15000},
    { nombre: "AnotherWearsprada", precio: 8000},
    { nombre: "GhoulGirl", precio: 4500},
    { nombre: "MajoMushi", precio: 5000},
    { nombre: "Ekko", precio: 3000},
];

const resultado1 = fechas.find((el) => el.nombre === "MajoMushi");
const resultado2 = fechas.find((el) => el.nombre === "DW");

console.log(resultado1);
console.log(resultado2);

const resultado3 = fechas.find((el) => el.nombre === "SaraLandry");
const resultado4 = fechas.find((el) => el.nombre === "DW")

console.log(resultado3);
console.log(resultado4);

const nombres = fechas.map((el) => el.nombre);
console.log(nombres);

const actualizado = fechas.map((el) => {
    return {
    nombre: el.nombre,
    precio: el.precio * 2.50,
};
});

console.log(actualizado);



