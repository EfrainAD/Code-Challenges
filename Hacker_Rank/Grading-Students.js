function gradingStudents(grades) {
   return grades.map((grade) => {
      if (grade < 38) return grade

      const countTo5 = 5 - (grade % 5)

      return countTo5 <= 2 ? grade + countTo5 : grade
   })
}
