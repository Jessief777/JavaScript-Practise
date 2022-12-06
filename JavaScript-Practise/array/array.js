const students = [
  { name: "Ben", score: 89 },
  { name: "John", score: 84 },
  { name: "Silver", score: 69 },
  { name: "Jack", score: 57 },
  { name: "Nathan", score: 82 },
  { name: "Joe", score: 96 },
  { name: "Jasmine", score: 73 },
  { name: "Lee", score: 52 },
  { name: "Jessie", score: 82 },
];

//1. list all failed students
function getFailedStudents(students) {
  const failedList = students.filter((student) => student.score < 60);
  console.log(failedList);
}
getFailedStudents(students);

// 2. Sort students score
function sortedStudents(students) {
  return students.sort((a, b) => b.score - a.score);
}
console.log(sortedStudents(students));

// 3. Calculate Score Sum:
//(1) solution_1: for loop

// function getScoreSum(students) {
//   let sum = 0
//   for (let index = 0; index < students.length; index++) {
//     const student = students[index]
//     sum += student.score
//   }
//   return sum
// }

// console.log(students);

//(2)solution_2: reduce()
function getScoreSumReduce(students) {
  return students.reduce((acc, cur) => acc + cur.score, 0);
}

console.log(`Total Score : ${getScoreSumReduce(students)}`);

/* 
MDN-js reduce()
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
//expected output: 10 
*/

// =========================

// 4.Uniform modification
//(1)map()
function changeScore(students, scoreChange) {
  const modifiedStudents = students.map((student) => ({
    ...student,
    score: student.score + scoreChange,
  }));
  // return students.map((student) => {
  //   student.score = student.score + 2;
  //   return student
  // });
  console.log(modifiedStudents);
}
changeScore(students, 2);

//（2）froEach
// function changeScoreForEach(students, scoreChange) {
//   return students.forEach((student) => {
//     student.score = student.score + scoreChange
//     return students
//   })
// }
// console.log(changeScoreForEach(students,2));
// console.log(students);

//5.Find one specific student's score
function findScore(students, name) {
  return students.find((student) => student.name === name);
}
console.log(findScore(students, "Jessie"));

//6.Get Passed Students Average Score:
//step_1:.filter()=>get passed students list
const passedStudents = students.filter((student) => student.score > 60);
console.log(passedStudents);
//step_2:.reduce()=>calculate sum
const passedSum = passedStudents.reduce((acc, cur) => acc + cur.score, 0);
console.log(`Passed Average Sum : ${passedSum}`);
//step_3:get passed average score
const passedAverageScore = passedSum / passedStudents.length;
console.log(`Passed Average Score: ${passedAverageScore}`);

//练习：除了一个同学，计算出其他同学的平均分
//filter()

//8. Modify all failed student's score:
function changeFailedScore(students, scoreChange) {
  const failedList = students.filter((student) => student.score < 60);
  const getChangedScore = failedList.map((student) => ({
    ...student,
    score: student.score + scoreChange,
  }));
  console.log(getChangedScore);
}
changeFailedScore(students, 10);
