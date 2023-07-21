function squareDigits(num) {
   const numStr = String(num)
   let returnStr = ''

   for (let number of numStr) {
      const digit = Number(number)
      const squDigit = digit ** 2
      returnStr += squDigit
   }
   return Number(returnStr)
}
