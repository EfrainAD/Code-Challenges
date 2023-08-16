// const printerError = (s) => `${s.replace(/[a-m]/gi, '').length}/${s.length}`

function printerError(s) {
   let count = 0
   for (const letter of s) {
      if (!/[a-m]/.test(letter)) count++
   }

   return count + '/' + s.length
}

// Test
const testCases = [
   {
      input: 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz',
      output: '3/56',
   },
   {
      input: 'aaabbbbhaijjjm',
      output: '0/14',
   },
   {
      input: 'aaaxbbbbyyhwawiwjjjwwm',
      output: '8/22',
   },
]

testCases.forEach((test) =>
   console.log(printerError(test.input) === test.output)
)
