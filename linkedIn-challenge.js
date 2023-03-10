// Someone ask me how I change there code they changed to ES6, so I did. 

// Been awhile since I done these kind of coding challenges. I might have got carried away.

// This was my frist thought by going with what you did.
const removeDuplicates = (array) => {
  const counter = {}
  return array.filter(item => {
    if (counter[item])
      return false
    else {
      counter[item] = 1
      return true
    } 
  })
}
// Was going try keep it your way with the forEach, but splicing your array as you go through it.....
const removeDuplicates = (array) => {
  const counter = {}
  const newArr = []
  array.forEach((item, i) => {
    if (!counter[item]) {
      newArr.push(item)
      counter[item] = 1
    }
  })
  return newArr
}
// At that point I would just like to remove the counter var.
const removeDuplicates = (array) => {
  const newArr = []
  array.forEach((item, i) => {
    if (!newArr.includes(item)) {
      newArr.push(item)
    }
  })
  return newArr
}
// I personally like the reduce when I need to have value like newArr or object above to track soemthing as I loop.
const removeDuplicates = (array) =>
  array.reduce((newArr, item) => {
    if (!newArr.includes(item))
      newArr.push(item)
    return newArr
  }, [])

const array = [];
for (let i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 10) + 1)
}
console.log(removeDuplicates(array))