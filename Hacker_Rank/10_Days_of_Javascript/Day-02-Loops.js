'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', (inputStdin) => {
   inputString += inputStdin
})

process.stdin.on('end', (_) => {
   inputString = inputString
      .trim()
      .split('\n')
      .map((string) => {
         return string.trim()
      })

   main()
})

function readLine() {
   return inputString[currentLine++]
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
   const vowels = []
   const nonVowels = []
   for (const char of s) {
      if (/[aeiou]/i.test(char)) vowels.push(char)
      else if (/[a-z]/i.test(char)) nonVowels.push(char)
   }
   vowels.forEach((vowel) => console.log(vowel))
   nonVowels.forEach((nonVowel) => console.log(nonVowel))
}

function main() {
   const s = readLine()

   vowelsAndConsonants(s)
}
