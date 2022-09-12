//tipo string

    const texto1 = "HelloWorld!!!"
    const texto2 = "HelloWorld!!!"
    const senha = "sdasdaSDSDSA22323##"
    const stringDeNumeros = "1234"

// aspas simples aplicacao (exemplo citação)

    const citacao = 'o Daniel disse "Serei um dos melhores traders do mundo!!!"'
    const citacao2 = "o Daniel disse 'Serei um dos melhores programadores do mundo!!!'"
    console.log(citacao)
    console.log(citacao2)

// concatenacao de strings (+)

    const citacaoEX = "Meu nome é "
    const citacaoEX2 = "Daniel, o rei do baile"

    console.log(citacaoEX + citacaoEX2)


// template string ou template literal

console.log(`${texto1} essa é a template string`)

// UTF (unicode transformation format)

const dolar = '\u0024'
console.log(dolar)

// metodos

const maiuscula = "BORA BILL"
const minuscula = maiuscula.toLowerCase()

console.log(minuscula) //tranformou em letra minuscula

//propriedades

const senhaTeste = "BORABILL123"
const tamanhoSenha = senhaTeste.length

console.log(tamanhoSenha + " caracteres") // quantidade de caracteres

