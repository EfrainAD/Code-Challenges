const nextBigger = (n) => {
   const numInArr = String(n).split('')
   const largest = Number(numInArr.sort((a, b) => b - a).join(''))

   for (let i = n + 1; i <= largest; i++) {
      const digitBank = [...numInArr]
      const number = String(i).split('')
      const numOfRounds = number.length

      for (let j = 0; j < numOfRounds; j++) {
         if (number.includes(digitBank[digitBank.length - 1])) {
            const search = digitBank.pop()
            number.splice(number.indexOf(search), 1)
         } else {
            break
         }
      }
      if (digitBank.length === 0) {
         return i
      }
   }
   return -1
}

const tests = [
   [12, 21],
   [513, 531],
   [2017, 2071],
   [414, 441],
]

tests.forEach((test) => console.log(nextBigger(test[0]) === test[1]))
