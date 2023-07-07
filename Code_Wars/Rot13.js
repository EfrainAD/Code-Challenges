// Helper Function
const isLetterLowercase = (charCode) => charCode >= 97 && charCode <= 122
const isLetterUpercase = (charCode) => charCode >= 65 && charCode <= 90

const shift = (charCode, shiftKey) => {
   const numOfLetters = 26
   charCode += shiftKey
   charCode %= numOfLetters
   return charCode
}

const rot13Letter = (char) => {
   // a - z is 97 - 122
   // A - Z is 65 - 90

   let charCode = char.charCodeAt(0)
   const shiftKey = 13

   let chop
   if (isLetterLowercase(charCode)) {
      chop = 97
   } else if (isLetterUpercase(charCode)) {
      chop = 65
   } else {
      return char
   }

   charCode -= chop
   charCode = shift(charCode, shiftKey)
   charCode += chop

   return String.fromCharCode(charCode)
}

// Main Function
const rot13 = (message) => {
   let newMessage = ''

   for (let letter of message) newMessage += rot13Letter(letter)

   return newMessage
}

// Test It
const testStrings = [
   ['a', 'n'],
   ['H', 'U'],
   ['o', 'b'],
   ['Hello, World!', 'Uryyb, Jbeyq!'],
   ['OpenAI is amazing', 'BcraNV vf nznmvat'],
   ['Attack at dawn', 'Nggnpx ng qnja'],
   [
      'The quick brown fox jumps over the lazy dog',
      'Gur dhvpx oebja sbk whzcf bire gur ynml qbt',
   ],
   ['ROT13 is a simple cipher', 'EBG13 vf n fvzcyr pvcure'],
]

testStrings.forEach((test) => console.log(rot13(test[0]) === test[1]))
