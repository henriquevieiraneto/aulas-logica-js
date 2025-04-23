// declaração de variável com var

/*var nome = "Henrique"

var nome = "João"*/

// declaração de variavel com let

// let nome = "Henrique"

// nome = "João"

//variável declarada com const

const nome = "Henrique" // string

const sobrenome = "Vieira Neto"

const valor = 21.90 // number

const islogin = false // boolean

let preco // undefined

const endereco = null // null

const alunos = ["João","Maria","José"] //array

const alunoDoSenai = {
nome:"Henrique",
sobrenome:"Vieira Neto",
turno:"noturno",
idade:"16",
cursos:["TIIN","Filosofia","Sociologia","História","Ciências Sociais","Ciências Políticas"]
}

const alunosDoSenai = [
    {
        login:"joao",
        email:"joao@gmail.com",
        cursos:["games","web"]
    },
    {
        login:"maria",
        email:"maria@gmail.com",
        cursos:["design","games"]
    }
]

// console.log(nome + " " + sobrenome )

console.log(`Meu nome completo é ${nome} ${sobrenome} ${4 + 4}`)

//console.log(alunos[0]) //pega o valor do índice do array