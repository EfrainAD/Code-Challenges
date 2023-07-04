function generateHashtag(str) {
   str = str.trim()
   if (!str) return false

   // Make every word start with a capitable, as long it it starts with a word.
   str = str.replace(/^\w|\s\w/g, (char) => char.toUpperCase())

   str = str.replaceAll(' ', '')
   str = '#' + str

   if (str.length > 140) return false

   return str
}

console.log(
   generateHashtag(
      '   hi cool no   jsls sldkfjskljfskljfskljfsdjsfklsjd}={sklsfjlsakj+}{}=slkj+}{sj,fdj,shfsjkhfdsjkhfsjkhfsjshjkslklskd{=}jfskljslkdjsfklsjd}={hey .h he '
   )
)
console.log(generateHashtag(' '))
