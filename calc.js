function calcular(n1, n2){     //função calcular 
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)

    selector = document.getElementById('selector').value

    switch(selector){      //repetição
        case '+':           //caso o valor do seletor for +
             calculo = (n1 + n2)
             document.getElementById('resultado').innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
             break 
    
    
             case '-':           //caso o valor do seletor for -
             calculo = (n1 - n2)
             document.getElementById('resultado').innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}` 
             break

             case '*':           //caso o valor do seletor for *
             calculo = (n1 * n2)
             document.getElementById('resultado').innerHTML = `O resultado da multiplicação de ${n1} * ${n2} é = ${calculo}` 
             break

             case '/':           //caso o valor do seletor for /
             calculo = Math.round((n1 / n2))
             if(Number.isNaN(calculo)){
                document.getElementById('resultado').innerHTML = 'Insira um divisível válido!'
             }else{
             document.getElementById('resultado').innerHTML = `O resultado da divisão de ${n1} / ${n2} é = ${calculo}` 
             break
             }
    }
}