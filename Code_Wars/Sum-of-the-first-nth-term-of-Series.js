function SeriesSum(n) {
   let sum = 0
   let denominator = 1
   for (let i = 0; i < n; i++) {
      sum += 1 / denominator
      denominator = denominator + 3
   }
   return sum.toFixed(2)
}

// Test
const testCases = [
   { input: 1, output: '1.00' },
   { input: 2, output: '1.25' },
   { input: 3, output: '1.39' },
   { input: 4, output: '1.49' },
]

testCases.forEach((test) => console.log(SeriesSum(test.input) === test.output))
