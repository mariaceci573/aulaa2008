// Inicializar contadores
let contadorSoma = 0;
let contadorSubtracao = 0;
let contadorMultiplicacao = 0;
let contadorDivisao = 0;

let continuar = true;

// Loop principal do menu
while (continuar) {
    // Exibir o menu
    const opcao = prompt(`
    --- Menu de Calculadora ---
    a) SOMA
    b) SUBTRAÇÃO
    c) MULTIPLICAÇÃO
    d) DIVISÃO
    e) SAIR
    Digite sua opção:
    `);

    switch (opcao.toLowerCase()) {
        case 'a':
            // Lógica para soma
            const num1s = parseFloat(prompt("Digite o primeiro número para a soma:"));
            const num2s = parseFloat(prompt("Digite o segundo número para a soma:"));
            alert(`Resultado da Soma: ${num1s + num2s}`);
            contadorSoma++;
            break;
        case 'b':
            // Lógica para subtração
            const num1sub = parseFloat(prompt("Digite o primeiro número para a subtração:"));
            const num2sub = parseFloat(prompt("Digite o segundo número para a subtração:"));
            alert(`Resultado da Subtração: ${num1sub - num2sub}`);
            contadorSubtracao++;
            break;
        case 'c':
            // Lógica para multiplicação
            const num1mul = parseFloat(prompt("Digite o primeiro número para a multiplicação:"));
            const num2mul = parseFloat(prompt("Digite o segundo número para a multiplicação:"));
            alert(`Resultado da Multiplicação: ${num1mul * num2mul}`);
            contadorMultiplicacao++;
            break;
        case 'd':
            // Lógica para divisão
            const num1div = parseFloat(prompt("Digite o primeiro número para a divisão:"));
            const num2div = parseFloat(prompt("Digite o segundo número para a divisão:"));
            if (num2div !== 0) {
                alert(`Resultado da Divisão: ${num1div / num2div}`);
                contadorDivisao++;
            } else {
                alert("Erro: Divisão por zero não é permitida.");
            }
            break;
        case 'e':
            // Opção para sair
            continuar = false;
            alert(`
            --- Resumo das Operações ---
            Somas feitas: ${contadorSoma}
            Subtrações feitas: ${contadorSubtracao}
            Multiplicações feitas: ${contadorMultiplicacao}
            Divisões feitas: ${contadorDivisao}
            `);
            break;
        default:
            alert("Opção inválida! Por favor, escolha uma das opções do menu.");
    }
}