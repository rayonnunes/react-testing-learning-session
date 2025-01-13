// Passo 2 (GREEN): Fazer o teste passar
// export function calculateGrade(score) {
//     return 'Aprovado';
// }

// Passo 4 (GREEN): Refatorar o código
// export function calculateGrade(score) {
//   if (score >= 7) {
//     return "Aprovado";
//   }
// }

// Passo 6 (GREEN): Fazer o teste passar
// export function calculateGrade(score) {
//   if (score >= 7) {
//     return "Aprovado";
//   } else {
//     return "Avaliação Final";
//   }
// }

// Passo 8 (GREEN): Fazer o teste passar
export function calculateGrade(score) {
  if (score >= 7) {
    return "Aprovado";
  } else if (score >= 5) {
    return "Avaliação Final";
  } else {
    return "Reprovado";
  }
}
