import { calculateGrade } from "./grades";

describe("calculateGrade", () => {
  test("should return Aprovado for 7", () => {
    expect(calculateGrade(7)).toBe("Aprovado");
  });

  test("should return Aprovado for score grater than 7", () => {
    const score = Math.floor(Math.random() * 3 + 8);

    expect(calculateGrade(score)).toBe("Aprovado");
  });

  test("should return Avaliação Final for < 7 and >= 5", () => {
    const score = Math.floor(Math.random() * 2 + 5);

    expect(calculateGrade(score)).toBe("Avaliação Final");
  });

  test("should return Reprovado for < 5", () => {
    const score = Math.floor(Math.random() * 5);

    console.log("score", score);

    expect(calculateGrade(score)).toBe("Reprovado");
  });
});
