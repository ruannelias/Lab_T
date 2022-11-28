// // const corpo = document.querySelector('body')
// mostrar o valor há pagar
let capturando = "";
let produto = "";
let total = "";
function capturar () {
    produto = document.getElementById('modelo').value;
    if (produto == 'Produto A') {
        produto = 20
    }else if (produto == 'Produto B') {
        produto = 30
    }else if (produto == 'Produto C') {
        produto = 40
    }else if (produto == 'Produto D') {
        produto = 50
    }
    capturando = document.getElementById('Quantidade').value;
        total = produto * capturando

    if (capturando <= 50) {
        document.getElementById('valorDigitado').innerHTML = total;
    }else if (capturando > 50 && capturando <= 100 ) {
        document.getElementById('valorDigitado').innerHTML = total - total / 100 * 3 ;
    }else if (capturando > 100 && capturando <= 150 ) {
        document.getElementById('valorDigitado').innerHTML = total - total / 100 * 6 ;
    }else if (capturando > 150 && capturando <= 200 ) {
        document.getElementById('valorDigitado').innerHTML = total - total / 100 * 9 ;
    }else if (capturando > 200 && capturando <= 250 ) {
        document.getElementById('valorDigitado').innerHTML = total - total / 100 * 12 ;
    }else if (capturando > 250 && capturando <= 300 ) {
        document.getElementById('valorDigitado').innerHTML = total - total / 100 * 15 ;
    }else if (capturando > 300 && capturando <= 350 ) {
        document.getElementById('valorDigitado').innerHTML = total - total / 100 * 18 ;
    }else if (capturando > 350 && capturando <= 400 ) {
        document.getElementById('valorDigitado').innerHTML = total - total / 100 * 21 ;
    }else if (capturando > 400 ) {
        document.getElementById('valorDigitado').innerHTML = total - total / 100 * 24 ;
        }
}
// impedir o minimo de aluguel
let quantidade = "";
let modalidade = "";
function minimo () {
    quantidade = document.getElementById('Quantidade').value
    modalidade = document.getElementById('modalidade').value
    if (quantidade < 10 && modalidade == 'Aluguel') {

        alert("A quantidade minima para alugar é de 10 unidades")
    }
}
