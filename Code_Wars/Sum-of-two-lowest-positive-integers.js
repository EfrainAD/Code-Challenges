function sumTwoSmallestNumbers(numbers) {
   let lowest = Infinity
   let secondLowest = Infinity

   for (const number of numbers) {
      if (number < lowest) {
         secondLowest = lowest
         lowest = number
         // ;[lowest, secondLowest] = [number, lowest]
      } else if (number < secondLowest) {
         secondLowest = number
      }
   }
   return lowest + secondLowest

   // Note, this could be done and close in proformance for small to mid length arrays
   // O(n log n); This is a little more readable though.
   const [lowestS, secondLowestS] = numbers.sort((a, b) => a - b)
   return lowestS + secondLowestS
}

// Tesst
const testCases = [
   {
      input: [5, 8, 12, 19, 22],
      output: 13,
   },
   {
      input: [15, 28, 4, 2, 43],
      output: 6,
   },
   {
      input: [3, 87, 45, 12, 7],
      output: 10,
   },
   {
      input: [23, 71, 33, 82, 1],
      output: 24,
   },
   {
      input: [52, 76, 14, 12, 4],
      output: 16,
   },
]
testCases.forEach((test) =>
   console.log(sumTwoSmallestNumbers(test.input) === test.output)
)
