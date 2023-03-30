// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
const isOppositeDirection = (x, y) => {
     switch (x) {
          case "NORTH":
               return y === "SOUTH"
               break;
          case "WEST": 
               return y === "EAST"
               break;
          case "SOUTH":
               return y === "NORTH"
               break;
          case "EAST":
               return y === "WEST"
               break;
          case "remove":
               return false
               break;
          default: console.log('error, string not match an exeptiable arg arg1:', x, 'arg2:', y)
               break;
     }
}
function dirReduc(arr){
     let found = true

     while (found) {
          found = false
          for (let i = 0; i < arr.length; i++) {
               if (isOppositeDirection(arr[i], arr[i+1])) {
                    arr[i] = 'remove'
                    arr[i+1] = 'remove'
                    
                    found = true
               }
          }
          arr = arr.filter(element => element !== 'remove')
     }
     return arr
}

console.log(
     JSON.stringify(["WEST"]) 
     === 
     JSON.stringify(dirReduc(
          ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
     )
)
console.log(
     JSON.stringify(["NORTH", "WEST", "SOUTH", "EAST"]) 
     === 
     JSON.stringify(dirReduc(
          ["NORTH", "WEST", "SOUTH", "EAST"])
     )
)
console.log(
     JSON.stringify([]) 
     === 
     JSON.stringify(dirReduc(
          ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])
     )
)