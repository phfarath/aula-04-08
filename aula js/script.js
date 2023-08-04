// calculo de raio em funcao 
function calcular(raio){
    return `Perimetro: ${2 *Math.PI * raio}<br> 
    Area: ${Math.PI * raio * raio}<br>`
};
console.log(calcular(10));  //print no console
document.write(calcular(20)); // print na tela 

const multiplicacao=(num)=>{return num*num} //estrutura de uma arrow function 
console.log(multiplicacao(9))
document.write(multiplicacao(9))

document.write("<br>")

const multiplicacao2=(num)=>{return num * num}  // arrow function pt/2
console.log(multiplicacao2(10))
document.write(multiplicacao2(10))

