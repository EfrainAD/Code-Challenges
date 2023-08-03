function getSum(a, b) {
   let sum = 0

   if (a > b) {
      ;[a, b] = [b, a]
   }

   for (let i = a; i <= b; i++) {
      sum += i
   }

   return sum
}

// Test
const testCases = [
   {
      input: [0, -1],
      output: -1,
   },
   {
      input: [0, 1],
      output: 1,
   },
   {
      input: [2, 2],
      output: 2,
   },
   {
      input: [1, 1],
      output: 1,
   },
   {
      input: [-1, 0],
      output: -1,
   },
   {
      input: [-1, 2],
      output: 2,
   },
]

testCases.forEach((test) =>
   console.log(getSum(test.input[0], test.input[1]) === test.output)
)
