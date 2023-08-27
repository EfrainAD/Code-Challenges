const removeSmallest = (numbers) => {
   const idx = numbers.indexOf(Math.min(...numbers))
   return [...numbers.slice(0, idx), ...numbers.slice(idx + 1)]

   // Found out can't MUTATE the array
   // numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)
   return numbers
   const smallestNum = Math.min(...numbers)
   const idxOfSmallest = numbers.indexOf(smallestNum)
   numbers.splice(idxOfSmallest, 1)
   return numbers
}
// Test
const testCases = [
   { input: [1, 2, 3, 4, 5], output: [2, 3, 4, 5] },
   { input: [5, 3, 2, 1, 4], output: [5, 3, 2, 4] },
   { input: [2, 2, 1, 2, 1], output: [2, 2, 2, 1] },
   { input: [], output: [] },
]

testCases.forEach((test) =>
   console.log(
      removeSmallest(test.input).every((item, idx) => item === test.output[idx])
   )
)
