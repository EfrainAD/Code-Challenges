const getWeight = (number) => {
   const arr = String(number).split('')
   return arr.reduce((num, element) => (num += Number(element)), 0)
}

const orderWeight = (str) => {
   const arr = str.trim().replaceAll('  ', '').split(' ')
   const mapped = {}
   const keySet = new Set()
   let returnedStr = ''

   arr.forEach((value) => {
      const key = getWeight(value)

      keySet.add(key)
      mapped[key] = (mapped[key] || []).concat(value)
   })

   const keys = Array.from(keySet).sort((a, b) => a - b)

   keys.forEach((key) => {
      mapped[key].sort()

      mapped[key].forEach((num) => (returnedStr += `${num} `))
   })

   return returnedStr.trim()
}

const str = '2000       10003 1234000 44444444 9999 11 11 22 123 '
const ans = '11 11 2000 10003 22 123 1234000 44444444 9999'

console.log(orderWeight(str) === ans)
