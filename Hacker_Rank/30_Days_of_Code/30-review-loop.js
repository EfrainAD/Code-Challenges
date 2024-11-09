function processData(input) {
   //Enter your code here
   const newInput = input.split('\n')
   const [n, ...words] = newInput

   words.forEach((word) => {
      const even = []
      const odd = []

      for (let i = 0; i < word.length; i++) {
         const letter = word[i]

         if (i % 2 === 0) even.push(letter)
         else odd.push(letter)
      }
      console.log(even.join('') + ' ' + odd.join(''))
   })
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
   _input += input
})

process.stdin.on('end', function () {
   processData(_input)
})
