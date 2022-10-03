const datosPersonales = {
    nombre: "Gabriel",
    apellido: "Roatta",
    edad: 38,
    altura: 1.92,
    isDeveloper: true
}


const altura = datosPersonales.altura;

const array = [datosPersonales];

const datosPersonales2 ={
    nombre: "Andy",
    apellido: "Fontao",
    edad: 35,
    altura: 1.77,
    isDeveloper: false
}
const datosPersonales3 ={
    nombre: "Maxy",
    apellido: "Guzman",
    edad: 42,
    altura: 1.80,
    isDeveloper: true
}

array.push(datosPersonales2, datosPersonales3);

const newArray = array.sort((a,b)=>b.edad-a.edad);

console.log(newArray);