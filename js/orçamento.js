const input = document.getElementById('soma')
const impedir = document.getElementById('Quantidade');
let capturando = "";
let produto = "";
let total = "";
let modalidade = "";
//impedir de alugar menos que 10 unidades
function minimo() {
modalidade = document.getElementById('modalidade').value;
capturando = document.getElementById('Quantidade').value;
if (modalidade == 'Aluguel' && capturando < 10) {
    input.disabled = true;    
}else{
    input.disabled = false;
}
}
//impedir a virgula no formulario de quantidade
impedir.addEventListener("keypress", function(e) {
    checkChar(e);
})
function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    console.log(e.keyCode)
    // console.log(char)
    if (e.keyCode == 44) {
        return e.preventDefault();
    }
}
// mostrar o valor há pagar
function capturar () {
    produto = document.getElementById('modelo').value;
    modalidade = document.getElementById('modalidade').value

    if (modalidade == 'Compra') {
        if (produto == 'computador 01X') {
            produto = 3057.30
        }else if (produto == 'computador 02X') {
            produto = 3341.10
        }else if (produto == 'computador 03X') {
            produto = 4811.70
        }else if (produto == 'computador 04X') {
            produto = 8689.44
        }
    }else if (modalidade == 'Aluguel') {
        if (produto == 'computador 01X') {
            produto = 154.80
        }else if (produto == 'computador 02X') {
            produto = 175.44
        }else if (produto == 'computador 03X') {
            produto = 251.55
        }else if (produto == 'computador 04X') {
            produto = 452.79
        }
    }
    capturando = document.getElementById('Quantidade').value;
        total = produto * capturando
    
        if (capturando <= 9) {
        document.getElementById('valorDigitado').innerHTML = 'R$' + total;
    }else if (capturando >= 10 && capturando < 20 ) {
        document.getElementById('valorDigitado').innerHTML = 'R$' + (total - total / 100 * 7) ;
    }else if (capturando >= 20 && capturando < 30 ) {
        document.getElementById('valorDigitado').innerHTML = 'R$' + (total - total / 100 * 10) ;
    }else if (capturando >= 30 && capturando < 50 ) {
        document.getElementById('valorDigitado').innerHTML = 'R$' + (total - total / 100 * 15) ;
    }else if (capturando >= 50 && capturando < 100 ) {
        document.getElementById('valorDigitado').innerHTML = 'R$' + (total - total / 100 * 17) ;
    }else if (capturando >= 100 && capturando < 500 ) {
        document.getElementById('valorDigitado').innerHTML = 'R$' + (total - total / 100 * 19) ;
    }else if (capturando > 500 ) {
        document.getElementById('valorDigitado').innerHTML = 'R$' + (total - total / 100 * 22) ;
        }
}
function aviso() {
    if (modalidade == 'Aluguel' && capturando < 10) {
        alert("ATENÇÃO: Quantidade minima de produtos para se alugar: 10 unidades");    
    } else {

    }
}



