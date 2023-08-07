function validatePIN(pin) {
   return /^(\d{4}|\d{6})$/.test(pin)
   return /^\d{4}$|^\d{6}$/.test(pin)
   return /^\d\d\d\d$|^\d\d\d\d\d\d$/.test(pin)
}

// Test
const testCases = [
   { input: '1', output: false },
   { input: '12', output: false },
   { input: '123', output: false },
   { input: '12345', output: false },
   { input: '1234567', output: false },
   { input: '-1234', output: false },
   { input: '1.234', output: false },
   { input: '-1.234', output: false },
   { input: '00000000', output: false },
   { input: 'a234', output: false },
   { input: '.234', output: false },
   { input: '1234', output: true },
   { input: '0000', output: true },
   { input: '1111', output: true },
   { input: '123456387', output: false },
   { input: '123456', output: true },
   { input: '098765', output: true },
   { input: '000000', output: true },
   { input: '123456', output: true },
   { input: '090909', output: true },
]

testCases.forEach((test) =>
   console.log(validatePIN(test.input) === test.output)
)
