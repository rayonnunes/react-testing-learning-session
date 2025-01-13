import { calculateBonus } from "./calculateBonus";

export function calculateGrade(score) {
  const grade = score + calculateBonus(score);

  console.log(grade);

  if (grade >= 7) {
    return "Aprovado";
  } else if (grade >= 5) {
    return "Avaliação Final";
  } else {
    return "Reprovado";
  }
}
