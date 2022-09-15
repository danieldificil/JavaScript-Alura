function soma(){
    return 2+2
}
console.log(soma())

function soma2(numero1,numero2){
    return numero1+numero2
}
console.log(soma2(4,2))
console.log(soma2(4,7))
console.log(soma2(4,5))

// parametro x argumento

function nomeIdade(nome,idade) {
    return `meu nome é ${nome} e tenho ${idade} anos de idade`
}
// passando o argumento correto como parametro
console.log(nomeIdade("Daniel",2))

// passando o argumento de forma errada como parametro
console.log(nomeIdade(2,"Daniel"))

function multiplicacao(numero1, numero2) {
    return numero1 * numero2
}

console.log(multiplicacao(soma2(1,1),soma2(1,1)))

//colocando argumento default na function

function multiplicacao2(numero1=1, numero2=1) {
    return console.log(numero1 * numero2)
}

multiplicacao2(2,3)