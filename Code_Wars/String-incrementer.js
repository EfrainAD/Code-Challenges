const incrementString = (str) => {
   const match = str.match(/\d+$/)
   const end = match ? match[0] : '0'
   console.log(end)

   const numOfDigits = end.length
   const number = Number(end)
   const endFormated = String(number + 1).padStart(numOfDigits, '0')

   const front = str.replace(new RegExp(`${end}$`), '')

   return front + endFormated
}

const tests = [
   // ['foo', 'foo1'],
   // ['foobar23', 'foobar24'],
   // ['foo0042', 'foo0043'],
   // ['foo9', 'foo10'],
   // ['foo099', 'foo100'],
   ['fo99obar99', 'fo99obar100'],
]

tests.forEach((test) => console.log(incrementString(test[0]) === test[1]))
