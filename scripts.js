// variavel

let botao = document.getElementById("botao")

let inputMoedas = document.getElementById("input-moedas")
let select = document.getElementById("select-moedas")


// essa função é responsavel por converter o valor do Real Brasileiro para o Dolar americano atualizado
// ou converter pelo valor do Euro atualizado 

 async function ConverterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
        return resposta.json()
        
    })
      let dolar = moedas.USDBRL.high
      let euro = moedas.EURBRL.high
      
      console.log(dolar)
      console.log(euro)


    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ - Dólar Americano"){
        let ValorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (select.value === "€ - Euro") {
        let ValorEmEuro = inputValorEmReais / euro
        inputMoedas.innerHTML = ValorEmEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }

    textoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })


}
// essa função é responsavel por trocar a bandeira e o nome das moedas
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeiras-moedas")


    if (select.value === "US$ - Dólar Americano") {
        textoMoedas.innerHTML = "Dólar"
        bandeiraMoedas.src = "./img/estados-unidos.png"
    }


    if (select.value === "€ - Euro") {

        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"
    }

    ConverterMoedas()
}



botao.addEventListener("click", ConverterMoedas)
select.addEventListener("change", trocaDeMoeda)
