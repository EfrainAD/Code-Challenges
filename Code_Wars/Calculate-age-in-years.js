// Helper Functions
const isMonthGeaterThenBdayMonth = (nowDayMonth, bDayMonth) =>
   nowDayMonth > bDayMonth

const dateEqOrGreater = (nowDayDate, bDayDate) => nowDayDate >= bDayDate

const sameMonth = (nowDayMonth, bDayMonth) => nowDayMonth - bDayMonth === 0

function getAge(birthDate, nowDate = new Date()) {
   const bDayYear = birthDate.getFullYear()
   const nowDateYear = nowDate.getFullYear()
   const bDayMonth = birthDate.getMonth() + 1
   const nowDayMonth = nowDate.getMonth() + 1
   const bDayDate = birthDate.getDate()
   const nowDayDate = nowDate.getDate()

   let year = nowDateYear - bDayYear - 1

   if (isMonthGeaterThenBdayMonth(nowDayMonth, bDayMonth)) {
      year++
   } else if (sameMonth(nowDayMonth, bDayMonth)) {
      if (dateEqOrGreater(nowDayDate, bDayDate)) {
         year++
      }
   }

   return year
}

console.log(getAge(new Date('1913/01/01'), new Date('2013/01/01')) === 100)

console.log(getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24)

console.log(getAge(new Date('2013/01/01'), new Date('2014/01/01')) === 1)

console.log(getAge(new Date('2008/02/29'), new Date('2009/02/28')) === 0)

console.log(getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24)
