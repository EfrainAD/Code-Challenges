/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. */

function moveZeros(arr) {
     const zeroCount = arr.reduce((count, element) => {
          if (element === 0) return ++count
          return count
     },0)
     arr = arr.filter(element => element !== 0)
     for (let i = 0; i < zeroCount; i++) {
          arr.push(0)
     }
     return arr
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]