const binaryArrayToNumber = (arr) => {
   // console.log(arr.join(''))
   // console.log()
   // console.log(Number(arr.join('').toString(10)))
   return parseInt(arr.join(''), 2)
   return Number(arr.join('').toString(10))
}

// Test
const testCases = [
   { input: [0, 0, 0, 1], output: 1 },
   { input: [0, 0, 1, 0], output: 2 },
   { input: [1, 1, 1, 1], output: 15 },
   { input: [0, 1, 1, 0], output: 6 },
]

testCases.forEach((test) =>
   console.log(binaryArrayToNumber(test.input) === test.output)
)
