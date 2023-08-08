const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

// const longest = (s1, s2) =>
//    Array.from(new Set(s1 + s2))
//       .sort()
//       .join('')

// Test
const testCases = [
   { input: ['aretheyhere', 'yestheyarehere'], output: 'aehrsty' },
   {
      input: ['loopingisfunbutdangerous', 'lessdangerousthancoding'],
      output: 'abcdefghilnoprstu',
   },
   {
      input: ['inmanylanguages', 'theresapairoffunctions'],
      output: 'acefghilmnoprstuy',
   },
]

testCases.forEach((test) =>
   console.log(longest(test.input[0], test.input[1]) === test.output)
)
