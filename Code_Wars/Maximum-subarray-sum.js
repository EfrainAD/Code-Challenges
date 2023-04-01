var maxSequence = function (arr) {
   let maxSum = 0
   arr.forEach((number, index) => {
      let sum = 0
      let string = []
      for (let i = index; i < arr.length; i++) {
         sum += arr[i]
         string.push(sum)
      }
      const max = Math.max(...string)
      if (max > maxSum) maxSum = max
   })
   console.log(maxSum)
   return maxSum

   //   THOUGHTT I NEED THE RETURN A ARRAY OF THE NUMBER THAT SUMMED IT UP
   //   const winner = { startIndex: 0, endIndex: 0, maxSum: 0 }
   //   arr.forEach((number, index) => {
   //     let sum = 0
   //     let string = []
   //     for (let i = index; i < arr.length; i++) {
   //       sum += arr[i]
   //       string.push(sum)
   //     }
   //     const maxSum = Math.max(...string)
   //     if (maxSum > winner.maxSum) {
   //       winner.startIndex = index
   //       winner.endIndex = string.indexOf(maxSum) + index
   //       winner.maxSum = maxSum
   //     }
   //   })
   //   console.log(winner)
   //   console.log(arr.slice(winner.startIndex, winner.endIndex + 1))
   //   return winner.maxSum
}
console.log('[-2, 1, -3, 4, -1, 2, 1, -5, 4]')
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
