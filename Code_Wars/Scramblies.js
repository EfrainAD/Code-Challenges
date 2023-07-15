function scramble(str1, str2) {
   const letterBank = str1.split('').reduce((bank, letter) => {
      bank[letter] = (bank[letter] || 0) + 1
      return bank
   }, {})

   for (const letter of str2) {
      if (letterBank[letter]) {
         letterBank[letter] -= 1
      } else {
         return false
      }
   }

   return true
}

const res = scramble('codeswars', 'cwarss')
console.log(res)
