function isIsogram(str) {
   // learned I can make new set and put a whole string or arr in there.
   return new Set(str.toLowerCase()).size === str.length

   // I can do set, I know of sets I should have just didn't that, just figured it was the same. I read up that it is faster then looking up a object though.
   // const lowercase = str.toLowerCase()
   // const setOfChars = new Set()

   // for (const letter of lowercase) {
   //    if (setOfChars.has(letter)) return false
   //    else setOfChars.add(letter)
   // }
   // return true

   // Way I did it.
   // const bank = {}
   // for (let i = 0; i <= lowercase.length; i++) {
   //    if (bank[lowercase[i]]) return false
   //    else bank[lowercase[i]] = 1
   // }
   // return true

   // Brut force
   // for (let i = 0; i <= lowercase.length; i++) {
   //    for (let j = i + 1; j < lowercase.length; j++) {
   //       if (lowercase[i] === lowercase[j]) {
   //          return false
   //       }
   //    }
   // }
   // return true
}

// Test
const tests = [
   { input: 'Dermatoglyphics', output: true },
   { input: 'isogram', output: true },
   { input: 'aba', output: false },
   { input: 'moOse', output: false },
   { input: 'isIsogram', output: false },
   { input: '', output: true },
]

tests.forEach((test) => console.log(isIsogram(test.input) === test.output))
