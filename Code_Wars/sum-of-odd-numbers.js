function rowSumOddNumbers(n) {
   const start = (n - 1) * n + 1
   const rowOver = n - 1
   let sum = start

   for (let i = 1; i <= rowOver; i++) {
      const math = start + 2 * i
      sum += math
   }
   return sum
}

// Test
const testCases = [
   { input: 2, output: 8 },
   { input: 3, output: 27 },
   { input: 1, output: 1 },
   { input: 5, output: 125 },
   { input: 42, output: 74088 },
]

testCases.forEach((test) =>
   console.log(rowSumOddNumbers(test.input) === test.output)
)
