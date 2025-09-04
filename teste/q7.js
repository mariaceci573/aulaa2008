let s , su , mul , div , i , n1 , n2
s = Number(s)
su = Number(su)
mul = Number(mul)
div = Number(div)
n1 = Number(n1)
n2 = Number(n2)

console.log("Escolha uma das opcoes: ");
console.log("a - Soma (+)");
console.log("b - Subtração (-)");
console.log("c - Multiplicação (*)");
console.log("d - Divisão (/)");
console.log("e - Sair");
for(i = 0; true ; i++){
    let opcao = prompt("Digite a opção desejada: ");
    if(opcao === "e"){
        break;
    }
    n1 = Number(prompt("Digite o primeiro número: "));
    n2 = Number(prompt("Digite o segundo número: "));
    switch(opcao){
        case "a":
            s = n1 + n2;
            console.log("Resultado: " + s);
            s++;
            break;
        case "b":
            su = n1 - n2;
            console.log("Resultado: " + su);
            su++;   
            break;
        case "c":
            mul = n1 * n2;
            console.log("Resultado: " + mul);
            mul++;
            break;
        case "d":
            div = n1 / n2;
            console.log("Resultado: " + div);
            div++;
            break;
        default:
            console.log("Opção inválida");
    }
}