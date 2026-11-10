<<<<<<< HEAD
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

=======
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

>>>>>>> 7942fd7b1e62ed20036143d2b80aca626cc98be6
console.log(`Siswa dengan nilai tertinggi adalah ${highestScoreStudent.name} dengan nilai ${highestScoreStudent.score}.`);