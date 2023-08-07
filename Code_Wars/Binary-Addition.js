function addBinary(a, b) {
   return (a + b).toString(2)
}

// Test
const testCases = [
   { input: [1, 2], output: '11' },
   { input: [1, 1], output: '10' },
   { input: [5, 9], output: '1110' },
]

testCases.forEach((test) =>
   console.log(addBinary(test.input[0], test.input[1]) === test.output)
)
