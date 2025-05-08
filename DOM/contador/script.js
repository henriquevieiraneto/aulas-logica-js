let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementaValor = document.querySelector("#btnIncrementar")

btnIncrementaValor.addEventListener("click", ()=>{
    contador++
    resultado.textContent = `Contador: ${contador}`
})

const btnRemoveValor = document.querySelector("#btnRemover")

btnRemoveValor.addEventListener("click", ()=>{
    if(contador > 0){
    contador--
    resultado.textContent = `Contador: ${contador}`}
})
