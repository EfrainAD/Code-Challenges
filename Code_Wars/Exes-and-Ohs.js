const XO = (str) => {
   console.log(str)
   console.log(str.replace(/X/gi, '').length)
   console.log(str.replace(/O/gi, '').length)
   console.log(str.replace(/X/gi, '').length === str.replace(/O/gi, '').length)
   return str.replace(/X/gi, '').length === str.replace(/O/gi, '').length
}

// Test
const testCases = [
   { input: 'xo', output: true },
   { input: 'xxOo', output: true },
   { input: 'xxxm', output: false },
   { input: 'Oo', output: false },
   { input: 'ooom', output: false },
   { input: 'ooxx', output: true },
   { input: 'xooxx', output: false },
   { input: 'ooxXm', output: true },
   { input: 'zpzpzpp', output: true },
   { input: 'zzoo', output: false },
   { input: 'xx', output: false },
]

testCases.forEach((test) => {
   console.log(XO(test.input) === test.output)
})
