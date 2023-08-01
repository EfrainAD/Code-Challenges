function accum(s) {
   return s
      .split('')
      .map(
         (letter, index) =>
            letter.toUpperCase() + letter.toLowerCase().repeat(index)
      )
      .join('-')

   return s
      .split('')
      .map((letter, index) => {
         const first = letter.toUpperCase()
         const repeat = letter.toLowerCase()
         let repeats = ''
         for (let i = 0; i < index; i++) {
            repeats += repeat
         }

         return first + repeats
      })
      .join('-')

   const arrStr = s.split('')
   const ans = arrStr
      .reduce((nStr, letter, index) => {
         const first = letter.toUpperCase()
         const repeat = letter.toLowerCase()
         let repeats = ''
         for (let i = 0; i < index; i++) {
            repeats += repeat
         }

         return [...nStr, first + repeats]
      }, [])
      .join('-')

   return ans
}

const testCases = [
   {
      input: 'ZpglnRxqenU',
      output:
         'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu',
   },
   {
      input: 'NyffsGeyylB',
      output:
         'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb',
   },
   {
      input: 'MjtkuBovqrU',
      output:
         'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu',
   },
   {
      input: 'EvidjUnokmM',
      output:
         'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm',
   },
   {
      input: 'HbideVbxncC',
      output:
         'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc',
   },
]

testCases.forEach((t) => console.log(accum(t.input) === t.output))
