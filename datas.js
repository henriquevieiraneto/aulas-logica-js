let dia = 31
let mes = 13
let ano = 2030

const data = (`${dia}/${mes}/${ano}`)
if(mes >12 || mes <1){
    console.log(`Esse mês não existe`) 
} else if((mes == 1 || mes == 3 || mes == 5 || mes == 6 || mes == 8 || mes == 10 || mes == 12) && dia >31 || dia <1){
    console.log(`Esse dia não existe`)
}
else if((mes == 2) && dia >28 || dia <1){
    console.log(`Esse dia não existe`)
}
else if((mes == 4 || mes == 7 || mes ==9 || mes == 11) && dia >30 || dia <1){
    console.log(`Esse dia não existe`)
} else {console.log(`A data inserida é ${data}`)
}