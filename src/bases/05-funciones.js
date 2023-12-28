// Funciones en JS
const saludar = function (nombre) {
  return `Hola, ${saludar}`;
};

// Funciones Flechas, Arrow function
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

// mas simplificado
const saludar3 = (nombre) => `Hola, ${nombre}`;
// o sin parametros
const saludar4 = () => `Hola Mundo`;

console.log(saludar("Hola"));
console.log(saludar2("Neiber"));
console.log(saludar3("Goku"));
console.log(saludar4);

// con un return normal para obtener objetos
const getUser = () => {
  return {
    uid: "abcs123",
    username: "El_Man12333",
  };
};

// de forma mas directa respetando el cuerpo de la function
const getUser2 = () => ({ uid: "abc222", username: "data12" });

console.log(getUser);
console.log(getUser2);

// Practica
// 1. Transformar a una funcion de Flecha
// 2. Tiene que retorna un objeto implicito
// 3. Pruebas

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC567",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Neiber");
console.log(usuarioActivo);
// --------------- //
const getUsuarioActivo2 = (nombre) => ({ uid: "abc223", username: nombre });
console.log(getUsuarioActivo2("Neibervc"));
