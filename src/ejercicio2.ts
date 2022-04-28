//ejercicio de conjuncion
let numero1: number = Number(prompt("numero"));
if (7 < numero1 && 3 === 2) {
  console.log("verdadero");
}
// ejercicio de disyuncion
let numero: number = Number(prompt("ingrese un numero"));
if (numero % 2 === 6 || numero > 6) {
  console.log("verdadero");
} else {
  console.log("falso");
}
// ejercicio de negacion
if (!(5 < 1)) {
  console.log("verdadero");
} else {
  console.log("falso");
}
