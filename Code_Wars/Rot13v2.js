// Helper Function
const getEncriptKey = (key) => {
   // Shift lowercase letters
   const alphabetSmall = 'abcdefghijklmnopqrstuvwxyz'
   const newEndSmall = alphabetSmall.slice(0, key)
   const newFrontSmall = alphabetSmall.slice(13)
   const answerKeySmall = newFrontSmall + newEndSmall

   // Sift upercase letters
   const alphabetBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const newEndBig = alphabetBig.slice(0, key)
   const newFrontBig = alphabetBig.slice(key)
   const answerKeyBig = newFrontBig + newEndBig

   // Create the final answer key
   const answerKey = answerKeySmall + answerKeyBig

   return answerKey
}

// Main Function
const rot13 = (message) => {
   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const answerKey = getEncriptKey(13)

   let newMessage = ''
   for (let letter of message) {
      const letterIndex = alphabet.indexOf(letter)
      newMessage += letterIndex === -1 ? letter : answerKey[letterIndex]
   }
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
