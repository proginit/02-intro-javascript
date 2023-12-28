// Arreglos
// Es un objeto que puede almacenar multiples valores a la vez
// const arreglo = new Array(100);
// arreglo.push(1);
// el metodo push modifica el objeto actual
const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});

// mas simplificado
const arreglo4 = arreglo2.map((num) => num * 3);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);
