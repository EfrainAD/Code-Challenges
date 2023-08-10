const openOrSenior = (data) =>
   // {
   data.map((people) => (people[0] >= 55 && people[1] > 7 ? 'Senior' : 'Open'))
// return data.map((people) =>
//    people[0] >= 55 && people[1] > 7 ? 'Senior' : 'Open'
// )
// return data.map((people) => {
//    if (people[0] >= 55 && people[1] > 7) return 'Senior'
//    else return 'Open'
// })
// return data.map((people) => {
//    const age = people[0]
//    const handicapScore = people[1]

//    if (age >= 55 && handicapScore > 7) return 'Senior'
//    else return 'Open'
// })
// }

// Test
const testCases = [
   {
      input: [
         [45, 12],
         [55, 21],
         [19, -2],
         [104, 20],
      ],
      output: ['Open', 'Senior', 'Open', 'Senior'],
   },
   {
      input: [
         [3, 12],
         [55, 1],
         [91, -2],
         [53, 23],
      ],
      output: ['Open', 'Open', 'Open', 'Open'],
   },
   {
      input: [
         [59, 12],
         [55, -1],
         [12, -2],
         [12, 12],
      ],
      output: ['Senior', 'Open', 'Open', 'Open'],
   },
]

testCases.forEach((test) =>
   console.log(
      openOrSenior(test.input).every((res, index) => res === test.output[index])
   )
)
