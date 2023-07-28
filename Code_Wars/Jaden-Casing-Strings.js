const toJadenCase = (str) =>
   str.replace(/^[a-z]|\s[a-z]/g, (match) => match.toUpperCase())

const testCases = [
   {
      input: "How can mirrors be real if our eyes aren't real",
      output: "How Can Mirrors Be Real If Our Eyes Aren't Real",
   },
   {
      input: "not Jaden-Cased: how can mirrors be real if our eyes aren't real",
      output:
         "Not Jaden-Cased: How Can Mirrors Be Real If Our Eyes Aren't Real",
   },
   {
      input: "Jaden-Cased: how can mirrors be real if our eyes aren't real",
      output: "Jaden-Cased: How Can Mirrors Be Real If Our Eyes Aren't Real",
   },
]

testCases.forEach((test) => {
   console.log(toJadenCase(test.input) === test.output)
})
