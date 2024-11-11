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

function getLetter(s) {
   let letter
   const firstLetter = s.at(0)
   // Write your code here
   switch (true) {
      case /[aeiou]/.test(firstLetter):
         letter = 'A'
         break
      case /[bcdfg]/.test(firstLetter):
         letter = 'B'
         break
      case /[hjklm]/.test(firstLetter):
         letter = 'C'
         break
      case /[npqrstvwxyz]/.test(firstLetter):
         letter = 'D'
         break
   }

   return letter
}

function main() {
   const s = readLine()

   console.log(getLetter(s))
}
