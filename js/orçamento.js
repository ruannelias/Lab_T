// // const corpo = document.querySelector('body')
// mostrar o valor há pagar
let capturando = "";
function capturar () {
    // let produtoA = 20
    // let produtoB = 30
    // let produtoC = 40
    // let produtoD = 50
    capturando = document.getElementById('Quantidade').value;
    if (capturando <= 50) {
        document.getElementById('valorDigitado').innerHTML = capturando;
    }else if (capturando > 50 && capturando <= 100 ) {
        document.getElementById('valorDigitado').innerHTML = capturando - capturando / 100 * 3 ;
    }else if (capturando > 100 && capturando <= 150 ) {
        document.getElementById('valorDigitado').innerHTML = capturando - capturando / 100 * 6 ;
    }else if (capturando > 150 && capturando <= 200 ) {
        document.getElementById('valorDigitado').innerHTML = capturando - capturando / 100 * 9 ;
    }else if (capturando > 200 && capturando <= 250 ) {
        document.getElementById('valorDigitado').innerHTML = capturando - capturando / 100 * 12 ;
    }else if (capturando > 250 && capturando <= 300 ) {
        document.getElementById('valorDigitado').innerHTML = capturando - capturando / 100 * 15 ;
    }else if (capturando > 300 && capturando <= 350 ) {
        document.getElementById('valorDigitado').innerHTML = capturando - capturando / 100 * 18 ;
    }else if (capturando > 350 && capturando <= 400 ) {
        document.getElementById('valorDigitado').innerHTML = capturando - capturando / 100 * 21 ;
    }else if (capturando > 400 ) {
        document.getElementById('valorDigitado').innerHTML = capturando - capturando / 100 * 24 ;
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
