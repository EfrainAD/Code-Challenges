const highAndLow = (numbers) => {
   let largestN = -Infinity
   let smallestN = Infinity

   const numbersArr = numbers.match(/-?\d+/g)

   for (number of numbersArr) {
      number = Number(number)
      if (number > largestN) {
         largestN = number
      }
      if (number < smallestN) {
         smallestN = number
      }
   }

   return `${largestN} ${smallestN}`
}

console.log(highAndLow('1 2 3 4 5') === '5 1') // return "5 1"
console.log(highAndLow('1 2 -3 4 5') === '5 -3') // return "5 -3"
console.log(highAndLow('1 9 3 4 -5') === '9 -5') // return "9 -5"
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4') === '42 -9') // return "9 -5"
