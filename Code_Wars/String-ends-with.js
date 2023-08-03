const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// const solution = (str, ending) => str.endsWith(ending)
const solution = (str, ending) =>
   new RegExp(escapeRegExp(ending) + '$').test(str)

//  test
const testCases = [
   {
      input: ['abcde', 'cde'],
      output: true,
   },
   {
      input: ['abcde', 'abc'],
      output: false,
   },
   {
      input: ['abc', 'bc'],
      output: true,
   },
   {
      input: ['abc', 'd'],
      output: false,
   },
]

testCases.forEach((test) =>
   console.log(solution(test.input[0], test.input[1]) === test.output)
)
console.log(solution(':-)', ':-(') === false)
