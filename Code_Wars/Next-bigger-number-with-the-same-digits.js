const flip = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]])

const nextBigger = (n) => {
   const numInArr = [...String(n)]
   let answer = -1

   const endNums = []
   for (
      let currentIndex = numInArr.length - 1;
      currentIndex >= 0;
      currentIndex--
   ) {
      endNums.push({ value: numInArr[currentIndex], index: currentIndex })

      const nextNumber = {
         value: numInArr[currentIndex - 1],
         index: currentIndex - 1,
      }

      const find = endNums.find((number) => nextNumber.value < number.value)

      if (find) {
         flip(numInArr, nextNumber.index, find.index)

         const front = numInArr.slice(0, nextNumber.index + 1)
         const last = numInArr.slice(nextNumber.index + 1).sort()

         answer = Number([...front, ...last].join(''))

         break
      }
   }
   return answer
}

const tests = [
   [12, 21],
   [513, 531],
   [2017, 2071],
   [23864, 24368],
   [414, 441],
   [1234567899, 1234567989],
   [1234567890, 1234567908],
   [9876543210, -1],
   [59884848459853, 59884848483559],
]

tests.forEach((test) => console.log(nextBigger(test[0]) === test[1]))
