/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

const pigIt = (str) => {
     // Spit str into array by spaces
     let words = str.split(' ')
     console.log(words)
     words = words.map(word => {
          // check for non \w store it if there is. Then remove it.
          const wordLength = word.length
          const nonABCs = word.match(/\W+/)
          word = word.replace(/\W/, '')
          if (word === '')
               return nonABCs
          // Take first letter then move to the back, THEN add 'ay' to the end
          if (nonABCs && nonABCs.index + 1 - wordLength !== 0) {
               const index = nonABCs.index - wordLength + 1
               let temp = word.slice(0, index)
               temp += nonABCs
               temp += word.slice(index)
               word = temp
          }
          word = word + word[0]
          word = word.slice(1)
          word += 'ay'
          // If there is a \w stored then add it and.
          if (nonABCs && nonABCs.index + 1 - wordLength === 0)
               word += nonABCs
          
          return word
     })
     // join to a string again and return it.
     words = words.join(' ')
     return console.log(words)
     return words
}
// pigIt("Pig latin, aren't is cool")
// pigIt("latin, aren't")
// pigIt("latin, !aren't!")
pigIt('Pig latin is cool!')