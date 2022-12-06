snail = function(arr) {
     const flattenArr = []
     let XTrackerLeft = 0
     let XTrackerRight = arr[0].length // === 0 ? 0 : arr[0].length
     let YTrackerUp = 0
     let YTrackerDown = arr.length
     let x = 0
     let y = 0
     console.log(arr)
     console.log('xL', XTrackerLeft, 'xR', XTrackerRight, 'yU', YTrackerUp, 'yD', YTrackerDown)
     while (YTrackerUp < YTrackerDown) {
          // Go Right
          while (x < XTrackerRight) {
               console.log(`arr[${y}][${x}]: ${arr[y][x]}`)
               flattenArr.push(arr[y][x])
               x++
          }
          x--
          y++
          // Go Down
          while (y < YTrackerDown) {
               console.log(`arr[${y}][${x}]: ${arr[y][x]}`)
               flattenArr.push(arr[y][x])
               y++
          }
          y--
          x--
          // Go Left
          while (x >= XTrackerLeft) {
               console.log(`arr[${y}][${x}]: ${arr[y][x]}`)
               flattenArr.push(arr[y][x])
               x--
          }
          x++
          y--
          // Go Up
          while (y > YTrackerUp + 1) {
               console.log(`arr[${y}][${x}]: ${arr[y][x]}`)
               flattenArr.push(arr[y][x])
               y--
          }
          YTrackerUp++
          YTrackerDown--
          XTrackerLeft++
          XTrackerRight--
     }
     return console.log('return', flattenArr)
}



snail(
     [[]]) //, [];
snail(
     [[1]]) //, [1]);
snail(
     [
          [1, 2, 3], 
          [4, 5, 6], 
          [7, 8, 9]
     ]) //, [1, 2, 3, 6, 9, 8, 7, 4, 5]);
snail(
     [
          [1, 2, 3, 4, 5], 
          [6, 7, 8, 9, 10], 
          [11, 12, 13, 14, 15], 
          [16, 17, 18, 19, 20], 
          [21, 22, 23, 24, 25]
     ]) //, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
snail(
     [
          [1, 2, 3, 4, 5, 6], 
          [20, 21, 22, 23, 24, 7], 
          [19, 32, 33, 34, 25, 8], 
          [18, 31, 36, 35, 26, 9], 
          [17, 30, 29, 28, 27, 10], 
          [16, 15, 14, 13, 12, 11]
     ]) //, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);