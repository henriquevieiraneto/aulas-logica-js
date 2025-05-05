 const faturamento = {
 trimestre1: 100000,
 trimestre2: 200000,
 trimestre3: 300000
}

const {trimestre1,trimestre2,trimestre3} = faturamento

const mediaFaturamento = ((trimestre1+trimestre2+trimestre3)/3).toFixed(2)

if(mediaFaturamento >= 25000){
    console.log("Faturamento médio é o esperado")
}  else{
    console.log("Faturamento médio está abaixo do esperado")
}