const notasMatematica = {
    primeiroTrimestre: 6,
    segundoTrimestre: 8,
    terceiroTrimestre: 20
}

const { primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = notasMatematica

const mediaDeMatematica = ((primeiroTrimestre+segundoTrimestre+terceiroTrimestre) / 3).toFixed(2)

if(mediaDeMatematica >= 7 && mediaDeMatematica <=10){
    console.log("Aprovado")
}  else if (mediaDeMatematica >= 5 && mediaDeMatematica <7){
    console.log("Recuperação")
} else if(mediaDeMatematica >10){
    console.log("Média impossível")
} else{
    console.log("Reprovado")
}