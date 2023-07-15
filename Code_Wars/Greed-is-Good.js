const isContains = (search, amount, arr) => {
   let count = 0
   for (const item of arr) {
      if (item === search) count++
   }
   return count >= amount
}
const removeDice = (item, amount, arr) =>
   arr.filter((element) => {
      if (amount > 0 && element === item) {
         amount--
      } else {
         return true
      }
   }, [])

const timesFound = (item, arr) =>
   arr.reduce((count, cur) => {
      if (cur === item) return ++count
      return count
   }, 0)

const score = (dice) => {
   let value = 0
   let holder = [...dice]

   if (isContains(1, 3, holder)) {
      holder = removeDice(1, 3, holder)
      value += 1000
      console.log(holder)
      console.log(value)
   }
   for (let i = 6; i >= 2; i--) {
      if (isContains(i, 3, holder)) {
         holder = removeDice(i, 3, holder)
         value += i * 100
      }
   }
   value += timesFound(1, holder) * 100
   value += timesFound(5, holder) * 50

   console.log(value)
   return value
}

// console.log(score([5, 1, 1, 4, 1]))
// console.log(score([5, 1, 3, 4, 1]))
// console.log(score([2, 4, 4, 5, 4]))
// console.log(score([1, 1, 1, 3, 3]) === 1000)
// console.log(score([1, 1, 1, 1, 3]) === 1100)
// console.log(score([2, 2, 2, 3, 3]) === 200)
console.log(score([5, 5, 5, 3, 3]) === 500)

//   Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
