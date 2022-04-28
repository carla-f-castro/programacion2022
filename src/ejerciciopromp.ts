let precioProducto: number = Number(prompt("ingrese precio"));
let porcentajeDescuento: number = 0.1;
let descuento: number = Number(precioProducto * porcentajeDescuento);
let precioFinal: number = precioProducto - descuento;
console.log(precioFinal);
