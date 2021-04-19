import { findNonPrimeOccuringDuplicates, isPrime } from ".";

describe("isPrime", () => {
  it("returns false for 0", () => {
    expect(isPrime(0)).toBe(false);
  });

  it("returns false for 1", () => {
    expect(isPrime(1)).toBe(false);
  });

  it("returns true for 2", () => {
    expect(isPrime(2)).toBe(true);
  });

  it("returns true for prime number", () => {
    expect(isPrime(5)).toBe(true);
  });

  it("returns false for non prime number", () => {
    expect(isPrime(24)).toBe(false);
  });
});

describe("findNonPrimeOccuringDuplicates", () => {
  it("passes test example", () => {
    const a = [2, 3, 9, 2, 5, 1, 3, 7, 10];

    const b = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];

    const expected = [2, 9, 2, 5, 7, 10];

    expect(findNonPrimeOccuringDuplicates(a, b)).toEqual(expected);
  });
});
