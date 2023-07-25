const removeDuplicates = function (nums) {
   let slow = 0 // Index
   const padding = '_'

   // [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
   // [0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
   // [0, 1, 2, 1, 1, 2, 2, 3, 3, 4]
   // [0, 1, 2, 3, 1, 2, 2, 3, 3, 4]
   // [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
   for (let fast = 1; fast < nums.length; fast++) {
      if (nums[slow] !== nums[fast]) {
         slow++
         nums[slow] = nums[fast]
      }
   }

   const uniqueNums = slow + 1

   for (let i = uniqueNums; i < nums.length; i++) {
      nums[i] = padding
   }

   return uniqueNums
}

// var removeDuplicates = function (nums) {
//    const originalLength = nums.length
//    const padding = '_'

//    // Remove duplicates
//    nums.forEach((num, index, nums) => {
//       const currNum = num
//       let i = index
//       while (currNum === nums[i + 1]) i++
//       const needToRemove = i - index
//       nums.splice(index, needToRemove)
//    })

//    const unqueNums = nums.length

//    // Add padding
//    while (nums.length !== originalLength) nums.push(padding)

//    return unqueNums
// }

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5)
//5, nums = [0,1,2,3,4,_,_,_,_,_]
console.log(removeDuplicates([1, 1, 2]) === 2)
// [1,1]
