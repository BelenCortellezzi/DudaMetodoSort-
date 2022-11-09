
const arrayPersonas = [
    {
        nombre: "Almi",
        edad: 35,
        curso: "coder"
    },
    {
        nombre: "Bel",
        edad: 40,
        curso: "java8"
    },
    {
        nombre: "Adri",
        edad: 24,
        curso: "java8"
    },
    {
        nombre: "Dami",
        edad: 18,
        curso: "coder2"
    },
    {
        nombre: "Floro",
        edad: 28,
        curso: "java10"
    }
]

//DOS FORMAS DE HACERLO

//1.
//arrayPersonas.sort((a,b) => a.nombre > b.nombre);
//console.log(arrayPersonas);

//.2
/*arrayPersonas.sort(function(a,b) {
  return a.nombre < b.nombre;
});
console.log(arrayPersonas);*/

//.3

arrayPersonas.sort(function (a, b){
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
});

console.log(arrayPersonas)

