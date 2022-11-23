/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here. */

const checkHexRange = (arr) => {
     const nArr = arr.map(num => {
          if (num < 0) {
               return 0
          } else if (num > 255) {
               return 255
          } else {
               return num
          }
     })
     return nArr
}
const returnHex = (arr) => {
     const hexArr = arr.map(num => num.toString(16))
     const upperCasedArr = hexArr.map(str => str.toUpperCase())
     const fixedArr = upperCasedArr.map(num => {
          console.log(num)
          if (num.length < 2) {
               return '0' + num
          } 
          return num
     })
     return fixedArr
}

function rgb(r, g, b){
     let colors = [r, g, b]

     colors = checkHexRange(colors)
     colors = returnHex(colors)
     
     return (colors[0]+colors[1]+colors[2])
}