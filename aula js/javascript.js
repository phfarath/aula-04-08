// troca o titulo da pagina pelo escrito submitido
function mudar(){
    let novo= document.getElementById("idnome")
    document.getElementById("titulo").required = true;
    document.getElementById("titulo").innerHTML =novo.value; 
};
// insere os nomes nas posicoes colocadas
function inserir(){
    let numero= document.getElementById("posicao").value -1
    let novo = document.getElementById("novo").value

    document.getElementsByClassName("colocado")[numero].innerHTML= novo;
}
