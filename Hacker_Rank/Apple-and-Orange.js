const isWithinHouseRange = (s, t) => (point) =>
   s <= point && point <= t ? true : false

function countApplesAndOranges(s, t, a, b, apples, oranges) {
   // Write your code here
   const isAtHouse = isWithinHouseRange(s, t)

   const houseApples = apples.reduce(
      (sum, apple) => (isAtHouse(apple + a) ? ++sum : sum),
      0
   )
   const houseOranges = oranges.reduce(
      (sum, orange) => (isAtHouse(orange + b) ? ++sum : sum),
      0
   )

   console.log(houseApples)
   console.log(houseOranges)
}
