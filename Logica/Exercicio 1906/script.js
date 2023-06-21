function soma(n1, n2){
n1 = parseInt (document.getElementById("valor1").value)
n2 = parseInt (document.getElementById("valor2").value)
let result = n1 + n2
alert(result)
}

 function subtracao(n1, n2){
    n1 = parseInt (document.getElementById("valor1").value)
    n2 = parseInt (document.getElementById("valor2").value)
    let result = n1 - n2
    alert(result)
     }

     function multiplicacao(n1, n2){
        n1 = parseInt (document.getElementById("valor1").value)
        n2 = parseInt (document.getElementById("valor2").value)
        let result = n1 * n2
        alert(result)
         }

         function divisao(n1, n2){
            n1 = parseInt (document.getElementById("valor1").value)
            n2 = parseInt (document.getElementById("valor2").value)
            let result = n1 / n2
            alert(result)
            if(n2 == 0){
                alert("O divisor não pode ser igual a zero")
            }else{
                alert(result)
            }
             }
             