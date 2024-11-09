'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
   inputString += inputStdin
})

process.stdin.on('end', function () {
   inputString = inputString.split('\n')

   main()
})

function readLine() {
   return inputString[currentLine++]
}

function main() {
   const s = readLine()

   try {
      const int = parseInt(s) || error
      console.log(int)
   } catch (error) {
      console.log('Bad String')
   }
}
