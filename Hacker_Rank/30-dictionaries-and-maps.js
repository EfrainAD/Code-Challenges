function processData(input) {
   //Enter your code here
   const inputArr = input.split('\n')
   const n = parseInt(inputArr[0])
   const db = {}

   inputArr.slice(1, n + 1).forEach((line) => {
      const [name, number] = line.split(' ')
      db[name] = number
   })

   const searchs = inputArr.slice(n + 1)

   searchs.forEach((search) => {
      if (db[search]) console.log(`${search}=${db[search]}`)
      else console.log('Not found')
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
