// O(sqrt(n))
export const isPrime = (n: number) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

// O(a * sqrt(n)) + O(b)
export const findNonPrimeOccuringDuplicates = (
  sequenceA: number[],
  sequenceB: number[]
) => {
  const occuranceMap: Record<number, number> = {};

  // O(b) - b length of sequence B
  sequenceB.forEach((element) => {
    occuranceMap[element] =
      occuranceMap[element] !== undefined ? occuranceMap[element] + 1 : 1;
  });

  // O(a * sqrt(n)) - a lenght of sequence A, n - highest number of occurances
  return sequenceA.filter((element) => !isPrime(occuranceMap[element]));
};
