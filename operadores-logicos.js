const valor01 = 50
const valor02 = 20

// &&(operador de conjunção) 
// ||(operador de disjunção) 
// ! (negação)

// console.log(`${valor01 >20 || valor02 >30}`)

const temCarteira = true
const idade = 18

const resultadoDoTeste = idade>=18 && temCarteira

console.log(`${resultadoDoTeste ? "O candidato pode dirigir" : "O candidato não pode dirigir"}`);

// faça um algoritimo para verificar se o condtidato pode dirigir. Para isso ele precisa:
// 1 - ter idade >= 18
// 2 - ter carteira
// se a idade for >=18 deve aparecer "O candidato pode dirigir", senão "O candidato não pode dirigir"


console.log(`${idade >= 18 && temCarteira ? "O candidato pode dirigir" : "O candidato não pode dirigir"}`);
  