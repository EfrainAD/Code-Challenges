const reverseWords = (str) =>
   str.replace(/\S+/g, (match) => match.split('').reverse().join(''))
// const reverseWords = (str) =>
//    str
//       .split(' ')
//       .map((word) => word.split('').reverse().join(''))
//       .join(' ')

// Test
const testCases = [
   {
      input: 'The quick brown fox jumps over the lazy dog.',
      output: 'ehT kciuq nworb xof spmuj revo eht yzal .god',
   },
   { input: 'apple', output: 'elppa' },
   { input: 'a b c d', output: 'a b c d' },
   { input: 'double  spaced  words', output: 'elbuod  decaps  sdrow' },
]

testCases.forEach((test) =>
   console.log(reverseWords(test.input) === test.output)
)
