function findShort(s) {
   // const words = s.match(/(^\S+)|(\s\S+)/gi)
   // const lengths = words.map((world) => world.trim().length)
   // const shortest = Math.min(...lengths)
   // return shortest
   return Math.min(
      ...s.match(/(^\S+)|(\s\S+)/gi).map((world) => world.trim().length)
   )
}

const testCases = [
   { input: 'bitcoin take over t"he world maybe who knows perhaps', output: 3 },
   {
      input: 'turns out random test cases are easier than writing out basic ones',
      output: 3,
   },
   { input: "Let's travel abroad shall we", output: 2 },
]

testCases.forEach((test) => console.log(findShort(test.input) === test.output))
