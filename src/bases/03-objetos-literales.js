// Objetos literales

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 554445545,
    lat: 14.3232,
    lng: 34.92332333,
  },
};

// console.table(persona);

// const persona2 = persona;
// esto es un copia del objeto que es muy distinto a un clon
// persona2.nombre = "Peter";

// con spreat operator se crea un clone del objeto que sirve mas para manejar datos
const persona2 = { ...persona };
persona2.nombre = "Peter";
console.log(persona);
console.log(persona2);
