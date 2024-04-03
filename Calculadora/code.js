var showResult = document.querySelector('#result')

function soma(){
    var number1 = Number(document.querySelector('#txtnumber1').value)
    var number2 = Number(document.querySelector('#txtnumber2').value)

    if (!number1 || !number2){
        window.alert('Insira os valores corretamente!')
    } else {
        let result = number1 + number2
        showResult.innerHTML = `${result}`
    }
}

function sub(){
    var number1 = Number(document.querySelector('#txtnumber1').value)
    var number2 = Number(document.querySelector('#txtnumber2').value)

    if (!number1 || !number2){
        window.alert('Insira os valores corretamente!')
    } else {
        let result = number1 - number2
        showResult.innerHTML = `${result}`
    }
}

function mult(){
    var number1 = Number(document.querySelector('#txtnumber1').value)
    var number2 = Number(document.querySelector('#txtnumber2').value)

    if (!number1 || !number2){
        window.alert('Insira os valores corretamente!')
    } else {
        let result = number1 * number2
        showResult.innerHTML = `${result}`
    }
}

function div(){
    var number1 = Number(document.querySelector('#txtnumber1').value)
    var number2 = Number(document.querySelector('#txtnumber2').value)

    if (!number1 || !number2){
        window.alert('Insira os valores corretamente!')
    } else {
        let result = number1 / number2
        showResult.innerHTML = `${result}`
    }
}