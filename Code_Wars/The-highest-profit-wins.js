const minMax = (arr) => [Math.min(...arr), Math.max(...arr)]

// Test
const testCases = [
   { input: [1, 2, 3, 4, 5], output: [1, 5] },
   { input: [2334454, 5], output: [5, 2334454] },
   { input: [5], output: [5, 5] },
]

testCases.forEach((test) =>
   console.log(
      minMax(test.input).every((output, idx) => output === test.output[idx])
   )
)
