function maskify(cc) {
   return cc.replace(/.(?=....)/g, '#')

   return cc.slice(-4).padStart(cc.length, '#')

   const fullLength = cc.length
   const lastFourDigits = cc.slice(-4)
   return lastFourDigits.padStart(fullLength, '#')
}

// Tesst
const testCases = [
   { input: '4556364607935616', output: '############5616' },
   { input: '1', output: '1' },
   { input: '11111', output: '#1111' },
]

testCases.forEach((test) => console.log(maskify(test.input) === test.output))
