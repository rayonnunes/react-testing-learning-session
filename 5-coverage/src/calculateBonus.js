export function calculateBonus(score) {
  if (score === 6.9 || score === 4.9) {
    return 0.1;
  }

  if (score < 6.9 && score >= 5) {
    return 6.9 - score;
  }

  if (score < 4.9) {
    return 4.9 - score;
  }

  return 0;
}
