const firstNonRepeatingLetter = (s) => {
   for (let letter of s) {
      const letterReg = new RegExp(letter, 'ig')

      const matches = s.match(letterReg).length
      if (matches === 1) return letter
   }
   return ''
}

const arr = ['stretretssa', 'sTretraRetssa']
arr.forEach((str) => console.log(firstNonRepeatingLetter(str)))
