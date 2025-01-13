import { calculateGrade } from "./grades";

// Passo 1 (RED): Escrever um teste que falhe
describe("calculateGrade", () => {
  test("should return Aprovado for 7", () => {
    expect(calculateGrade(7)).toBe("Aprovado");
  });

  // Passo 3 (RED): Escrever mais testes que provoquem falhas
  test("should return Aprovado for score grater than 7", () => {
    const score = Math.floor(Math.random() * 3 + 8);

    expect(calculateGrade(score)).toBe("Aprovado");
  });

  // Passo 5 (RED): Escrever mais testes que provoquem falhas
  test("should return Avaliação Final for < 7 and >= 5", () => {
    const score = Math.floor(Math.random() * 2 + 5);

    expect(calculateGrade(score)).toBe("Avaliação Final");
  });

  // Passo 7 (RED): Escrever mais testes que provoquem falhas
  test("should return Reprovado for < 5", () => {
    const score = Math.floor(Math.random() * 5);

    expect(calculateGrade(score)).toBe("Reprovado");
  });
});
