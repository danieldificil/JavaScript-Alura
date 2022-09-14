//tipo de dados
//booleanos

// conversao impllícita

const numero = 456;
const numeroString = "456"

console.log(numero === numeroString);
console.log(numero == numeroString);
console.log(numero + numeroString);

//convevrsao explícita

console.log(numero + Number(numeroString))

const numeroNaN = Number("456A")

console.log(numeroNaN);

