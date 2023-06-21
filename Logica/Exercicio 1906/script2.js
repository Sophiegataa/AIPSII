let primeiro;
let segundo;
let sinal;

function enviasete(){
    document.getElementById("visor").value += "7"
}

function enviaoito(){
    document.getElementById("visor").value += "8"
}

function envianove(){
    document.getElementById("visor").value += "9"
}

function enviadivi(){
    document.getElementById("visor").value += "/"
}

function enviaquatro(){
    document.getElementById("visor").value += "4"
}

function enviacinco(){
    document.getElementById("visor").value += "5"
}

function enviaseis(){
    document.getElementById("visor").value += "6"
}

function enviamult(){
    document.getElementById("visor").value += "x"
}

function enviaum(){
    document.getElementById("visor").value += "1"
}

function enviadois(){
    document.getElementById("visor").value += "2"
}

function enviatres(){
    document.getElementById("visor").value += "3"
}

function enviaadc(){
    document.getElementById("visor").value += "+"
}

function enviazero(){
    document.getElementById("visor").value += "0"
}

function adicao(){
    primeiro = document.getElementById('visor').value
    document.getElementById('visor').value= ''
    sinal = "+"
    
}
function igual(){
segundo =  document.getElementById("visor").value
let result
if(sinal == "+"){
  result = parseInt(primeiro) + parseInt(segundo)
}
if(sinal == "x"){
  result = parseInt(primeiro) * parseInt(segundo)
}
if(sinal == "-"){
  result = parseInt(primeiro) - parseInt(segundo)
}
if(sinal == "/"){
  result = parseInt(primeiro) / parseInt(segundo)
}
if(sinal == "r"){
    result = Math.sqrt(parseInt(primeiro))
  }
  if(sinal == "p"){
    result = Math.pow(parseInt(primeiro), parseInt(segundo))
    
  }
    document.getElementById("visor").value = result

}

function apaga(){
    document.getElementById("visor").value = ''
    primeiro = ''
    segundo = ''
}
function subt(){
    primeiro = document.getElementById('visor').value
    document.getElementById('visor').value= ''
    sinal = "-"
}

function mult(){
    primeiro = document.getElementById('visor').value
    document.getElementById('visor').value= ''
    sinal = "x"
}

function divi(){
    primeiro = document.getElementById('visor').value
    document.getElementById('visor').value= ''
    sinal = "/"
}

function raizQuad(){
    primeiro = document.getElementById('visor').value
    document.getElementById('visor').value= ''
    sinal = "r"
    igual()
}

function potencia(){
    primeiro = document.getElementById('visor').value
    document.getElementById('visor').value= ''
    sinal = "p"
}