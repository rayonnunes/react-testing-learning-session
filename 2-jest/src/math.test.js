import { sum, subtract } from "./math";

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
  expect(result).toBeGreaterThan(9);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
  expect(result).toBeGreaterThanOrEqual(3);
});
