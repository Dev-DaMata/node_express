import promptt from "prompt-sync";

let prompt = promptt()
function Percorre (){
    let resposta = prompt("Propriedades css:")
    let arr = []
    while (resposta.toUpperCase() != "SAIR") {
        arr.push(resposta)
        resposta = prompt("Propriedades css:")
    }
    console.log(arr.sort());
}
Percorre()
