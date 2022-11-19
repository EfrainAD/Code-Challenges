/* Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four"). */

/* Help
Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000 */

/* 
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000
 */

class RomanNumerals {
     static toRoman = (num) => {
          const romansNum = {
               M: 0,
               D: 0,
               C: 0,
               L: 0,
               X: 0,
               V: 0,
               IV: 0,
               I: 0,
          }
          let currentInt = null
          //13545
          // Get the first number
          // & the first three Roman numbers
          currentInt = num % 10
          if (currentInt < 4) {
               romansNum.I = currentInt
          }
          else if (currentInt === 4){
               romansNum.I = 0
               romansNum.IV = 1
          }
          else if (currentInt >= 5) {
               romansNum.V = 1
               romansNum.I = currentInt % 5
          }
          // Get new Number
          num = Math.floor( num /  10)
          // Get the secon number
          // & the two Roman numbers
          currentInt = num % 10
          if (currentInt >= 5) {
               romansNum.L = 1
               romansNum.X = currentInt % 5
          } else {
               romansNum.X = currentInt
          }
          // Get new Number
          num = Math.floor( num /  10)
          // Get the threird number
          // & the C & D two Roman numbers
          currentInt = num % 10
          if (currentInt >= 5) {
               romansNum.D = 1
               romansNum.C = currentInt % 5
          } else {
               romansNum.C = currentInt
          }
          // Get new Number
          num = Math.floor( num /  10)
          romansNum.M = num
          // String the answer
          let str = ''
          for (const key in romansNum) {
               for (let i = 0; i < romansNum[key]; i++) {
                    str = str + key
               }
          }
          return str
     }
     static fromRoman = (roman) => {
          let sum = 0

          const isIV = roman.includes('IV')
          if (isIV) {
               roman = roman.slice(0, -2)
               sum += 4
          }

          for (let i = 0; i < roman.length; i++) {
               const element = roman[i];
               switch (element) {
                    case 'I':
                         sum += 1
                         break
                    case 'V':
                         sum += 5
                         break
                    case 'X':
                         sum += 10
                         break
                    case 'L':
                         sum += 50
                         break
                    case 'C':
                         sum += 100
                         break
                    case 'D':
                         sum += 500
                         break
                    case 'M':
                         sum += 1000
                         break
                    case '_':
                         break
                    default:
                         console.log('errer - unknown Roman Letter')
                         break
               }
          }     
          return sum
     }
}
RomanNumerals.toRoman(1990)
RomanNumerals.fromRoman('MCMXC')