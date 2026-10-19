let studentsScore = [
  {
    name: 'Andi',
    score: 90
  },
  {
    name: 'Rudi',
    score: 80
  },
  {
    name: 'Dira',
    score: 100
  }
];

// Menggunakan reduce untuk mencari objek dengan score tertinggi
let highestScoreStudent = studentsScore.reduce((max, student) => {
  return student.score > max.score ? student : max;
});

console.log(`Siswa dengan nilai tertinggi adalah ${highestScoreStudent.name} dengan nilai ${highestScoreStudent.score}.`);