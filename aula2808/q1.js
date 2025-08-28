let qtd = Number(prompt("Quantas pessoas tem na família?"))
let total = 0
let i = 0

while (i < qtd) {
  let salario = Number(prompt("Digite o salário do membro :"))
  total += salario
  i++
}

alert("A família possui R$ " + total)
