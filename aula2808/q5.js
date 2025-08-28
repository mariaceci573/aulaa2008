let matriculas = []
let notas = []
let i = 0
let soma = 0

while (i < 5) {
  let mat = prompt("Digite a matrícula do aluno:")
  let nota = parseFloat(prompt("Digite a nota do aluno:"))

  matriculas.push(mat)
  notas.push(nota)
  soma += nota
  i++
}

let media = soma / 5

console.log("Alunos com nota acima da média:")
i = 0;
while (i < 5) {
  if (notas[i] > media) {
    console.log("Matrícula: " + matriculas[i])
  }
  i++
}
