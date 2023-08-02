function DNAStrand(dna) {
   return dna.replace(
      /[ATGC]/g,
      (match) => ({ A: 'T', T: 'A', G: 'C', C: 'G' }[match])
   )

   return dna.replace(/[ATGC]/g, (match) => {
      const key = { A: 'T', T: 'A', G: 'C', C: 'G' }
      return key[match]
   })
}

// Test
const testCases = [
   {
      input: 'AAAA',
      output: 'TTTT',
   },
   {
      input: 'ATTGC',
      output: 'TAACG',
   },
   {
      input: 'GTAT',
      output: 'CATA',
   },
]

testCases.forEach((test) => console.log(DNAStrand(test.input) === test.output))
