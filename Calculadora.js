function calculadora (){
    const operacao = parseInt(prompt('Escolha uma operação:\n[1] Soma\n[2] Substração\n[3] Multiplicação\n[4] Divisão\n[5] Exponenciação'));
    
    let num1 = parseInt(prompt('Digite o valor 1: '));
    let num2 = parseInt(prompt('Digite o valor 2: '));

    if (operacao==1){
        let soma = num1 + num2;
        console.log('A soma dos dois números é ', soma);
    }  else if (operacao == 2){
        let subtracao = num1 - num2;
        console.log('A subtração dos dois números é ', subtracao);
    }  else if (operacao == 3){
        let multiplicacao = num1*num2;
        console.log('A multiplicação dos dois números é ', multiplicacao);
    }  else if (operacao ==4) {
        let divisao = num1/num2;
        console.log('A divisão dos dois números é ', divisao);
    }  else if (operacao ==5) {
        let divisao = num1 ** num2;
        console.log('A exponenciação dos dois números é ', divisao);        
    }
}

calculadora();
