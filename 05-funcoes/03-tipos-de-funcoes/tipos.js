// função sem retorno e sem parametro

function cumprimentar(){
    console.log('oi gente!')
}

cumprimentar()

// função sem retorno e com parâmetro

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')

//função com retorno e sem parametro

function cumprimentar(){
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// função com retorno e mais de um parametro

function operacaoMatematica(numero1, numero2, numero3) {
    return console.log(numero1 + numero2 + numero3)
}

operacaoMatematica(15, 30, 45) // 90

function comParametro(param) {
    console.log(param)
}
comParametro()