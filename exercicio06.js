const produtos = [
    {
        nome: "Carro",
        preco: 200000,
        descricao: "Híbrido, 4 portas, 30km/L"
    },
    {
        nome: "Moto",
        preco: 20000,
        descricao: "Elétrica, 0-300km/h em 3 segundos, 500km/carga"
    }, 
    {
        nome: "Bicicleta",
        preco: 2000,
        descricao: "21 marchas, aro 25"
    }
]

const nomeProduto = produtos.map(produtos => produtos.nome)
const precoProduto = produtos.map(produtos => produtos.preco)
const descricaoProduto = produtos.map(produtos => produtos.descricao)
const tudo = (nomeProduto + precoProduto +  descricaoProduto)

console.log("Tudo sobre produtos", tudo)