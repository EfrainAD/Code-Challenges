// Note I should have used arr.sort()

const swap = (idx1, idx2, arr) =>
   ([arr[idx1], arr[idx2]] = [arr[idx2], arr[largestInx]])

function descendingOrder(n) {
   const nArr = String(n).split('')

   nArr.forEach((_, index) => {
      largest = -Infinity
      for (let i = index; i < nArr.length; i++) {
         if (largest < nArr[i]) {
            largest = nArr[i]
            largestInx = i
         }
      }

      if (largest !== -Infinity) swap(largestInx, index, nArr)
   })

   return Number(nArr.join(''))
}

//  test
const tests = [
   { Input: 42145, Output: 54421 },
   { Input: 145263, Output: 654321 },
   { Input: 123456789, Output: 987654321 },
]

tests.forEach((test) =>
   console.log(descendingOrder(test.Input) === test.Output)
)
