// var removeDuplicates = function (nums) {
//    const newNums = []

//    // add unique numbers to the new nums array
//    nums.forEach((num, index) => {
//       if (num !== nums[index + 1]) newNums.push(num)
//    })

//    // get the number of unique numbers
//    const uniqueNums = newNums.length

//    // Add padding at the end of the array
//    while (newNums.length !== nums.length) {
//       newNums.push('_')
//    }
//    console.log(newNums)
//    console.log('Output:', uniqueNums, 'nums =', +newNums)
//    return uniqueNums
// }

var removeDuplicates = function (nums) {
   const originalLength = nums.length
   const padding = '_'

   // Remove duplicates
   nums.forEach((num, index, nums) => {
      const currNum = num
      let i = index
      while (currNum === nums[i + 1]) i++
      const needToRemove = i - index
      nums.splice(index, needToRemove)
   })

   const unqueNums = nums.length

   // Add padding
   while (nums.length !== originalLength) nums.push(padding)

   return unqueNums
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5)
//5, nums = [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicates([1, 1, 2]) === 2)
// [1,1]
