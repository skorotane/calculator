let pastinputs = document.getElementById("pastinputs")

let inputs = document.getElementById("inputs")

let num1 = 0

let op = ""

let num2 = 0

let answer2 = true

function equation(num) {
    if (answer2){
        answer2 = false
        clearText()
    }
    if (inputs.innerText === "0"){ 
        inputs.innerText = num.toString()
    }
    else {
        inputs.innerText = inputs.innerText + num.toString()
    }
}

function decimal(){
    if(inputs.innerText.includes(".")) {
        return 
    }
    inputs.innerText = inputs.innerText + "."

}

function clearText(){
    inputs.innerText = "0"
    num1 = 0
    op = ""
    num2 = 0
    pastinputs.innerText = "0 - 0 = "
}

function sign(){
    let number = parseFloat(inputs.innerText) * -1
    inputs.innerText = number
}

function percent(){
    let number = parseFloat(inputs.innerText) / 100
    inputs.innerText = number
}

function plus(){
    if(answer2) {
        num1 = 0
        num2 = 0
        answer2 = false
    }

    op = "+"
    if (num1 === 0) {
        num1 = parseFloat(inputs.innerText)
    }
    else {
        num2 = parseFloat(inputs.innerText)
        pastinputs.innerText = num1 + " " + op + " " + num2 + " ="
        num1 = num1 + num2
    }
    inputs.innerText = "0"
}

function minus(){
    if(answer2) {
        num1 = 0
        num2 = 0
        answer2 = false
    }

    op = "-"
    if (num1 === 0) {
        num1 = parseFloat(inputs.innerText)
    }
    else {
        num2 = parseFloat(inputs.innerText)
        pastinputs.innerText = num1 + " " + op + " " + num2 + " ="
        num1 = num1 - num2
    }
    inputs.innerText = "0"
}

function times(){
    if(answer2) {
        num1 = 0
        num2 = 0
        answer2 = false
    }

    op = "x"
    if (num1 === 0) {
        num1 = parseFloat(inputs.innerText)
    }
    else {
        num2 = parseFloat(inputs.innerText)
        pastinputs.innerText = num1 + " " + op + " " + num2 + " ="
        num1 = num1 * num2
    }
    inputs.innerText = "0"
}

function divide(){
    if(answer2) {
        num1 = 0
        num2 = 0
        answer2 = false
    }

    op = "÷"
    if (num1 === 0) {
        num1 = parseFloat(inputs.innerText)
    }
    else {
        num2 = parseFloat(inputs.innerText)
        pastinputs.innerText = num1 + " " + op + " " + num2 + " ="
        num1 = num1 / num2
    }
    inputs.innerText = "0"
}

function equals(){
    num2 = parseFloat(inputs.innerText)
    let answer;

    if (op === "+") {
        answer = num1 + num2
    }
    else if (op === "-"){
        answer = num1 - num2
    }
    else if (op === "x"){
        answer = num1 * num2
    }
    else if (op === "÷"){
        answer = num1 / num2
    }

    answer2 = true

    pastinputs.innerText = num1 + " " + op + " " + num2 + " ="
    // pastinputs.innerText = `${num1} ${op} ${num2} =`
    inputs.innerText = answer
}
