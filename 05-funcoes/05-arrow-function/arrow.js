//arrow function

// com 1 parametro
const apresentarArrow = nome => console.log(`meu nome ${nome}`);
apresentarArrow("D.a")

// mais de um parametro
const soma = (numero1, numero2) => console.log(1+2)
soma(1,2)

// com mais de uma linha de código

const somaDeNumerosPequenos = (num1,num2) => {
    if(num1 > 9 || num2 > 9){
        return console.log("somente numeros menores qur 10!!!")
    }else{
        num1 + num2
    }
}

somaDeNumerosPequenos(10,2)
