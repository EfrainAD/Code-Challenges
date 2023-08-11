const number = (busStops) =>
   busStops.reduce(
      (peopleInBus, [enterBus, exitBus]) => peopleInBus + enterBus - exitBus,
      0
   )

// Test
const testCases = [
   {
      input: [
         [10, 0],
         [3, 5],
         [5, 8],
      ],
      output: 5,
   },
   {
      input: [
         [3, 0],
         [9, 1],
         [4, 10],
         [12, 2],
         [6, 1],
         [7, 10],
      ],
      output: 17,
   },
   {
      input: [
         [3, 0],
         [9, 1],
         [4, 8],
         [12, 2],
         [6, 1],
         [7, 8],
      ],
      output: 21,
   },
   { input: [[0, 0]], output: 0 },
]

testCases.forEach((test) => console.log(number(test.input) === test.output))
