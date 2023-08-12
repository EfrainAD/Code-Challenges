function oddOrEven(array) {
   return array.reduce((acc, num) => acc + num, 0) % 2 === 0 ? 'even' : 'odd'

   // I think this one the best, more readable.
   const sum = array.reduce((acc, num) => acc + num, 0)
   return Math.abs(sum) % 2 === 0 ? 'even' : 'odd'

   if (array.length === 0) return 'even'
   return array.reduce((acc, num, idx) => {
      if (idx === array.length - 1) {
         return Math.abs(acc + num) % 2 === 0 ? 'even' : 'odd'
      } else return acc + num
   }, 0)

   const res = array.reduce((acc, num, idx) => {
      if (idx === array.length - 1) {
         return Math.abs(acc + num) % 2 === 0 ? 'even' : 'odd'
      } else return acc + num
   }, 0)
   if (res === 0) return 'even'
   return res
}

// Test
const testCases = [
   { input: [0], output: 'even' },
   { input: [1], output: 'odd' },
   { input: [], output: 'even' },
   { input: [0, 1, 5], output: 'even' },
   { input: [0, 1, 3], output: 'even' },
   { input: [1023, 1, 2], output: 'even' },
   { input: [0, -1, -5], output: 'even' },
   { input: [0, -1, -3], output: 'even' },
   { input: [-1023, 1, -2], output: 'even' },
   { input: [0, 1, 2], output: 'odd' },
   { input: [0, 1, 4], output: 'odd' },
   { input: [1023, 1, 3], output: 'odd' },
   { input: [0, -1, 2], output: 'odd' },
   { input: [0, 1, -4], output: 'odd' },
   { input: [-1023, -1, 3], output: 'odd' },
]

testCases.forEach((test) => {
   console.log(oddOrEven(test.input) === test.output)
})
