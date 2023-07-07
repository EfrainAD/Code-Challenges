// Helper Function
const rot13Letter = (char) => {
   // a - z is 97 - 122
   let code = char.charCodeAt(0)
   if (code >= 97 && code <= 122) {
      code -= 97
      code += 13
      code %= 26
      code += 97
   } else if (code >= 65 && code <= 90) {
      // A - Z is 65 - 90
      code -= 65
      code += 13
      code %= 26
      code += 65
   } else {
      return char
   }
   return String.fromCharCode(code)
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
