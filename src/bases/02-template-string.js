const nombre = "Neiber";
const apellido = "Vasquez";

// const nombreCompleto = nombre + " " + apellido;
// se puede utilizar Template string
const nombreCompleto = `${nombre} - ${apellido}`;

// se puede utilizar una funcion para pasar como parametro un nombre
function getNombre(nombre) {
  return "Hola " + nombre;
}

// console.log(nombreCompleto);
console.log(`Este es un texto: ${getNombre(nombre)}`);
