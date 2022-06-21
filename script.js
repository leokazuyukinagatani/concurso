const students = [
  {
    name: "João",
    noteOne: 8,
    noteTwo: 9
  },
  {
    name: "Maria",
    noteOne: 6,
    noteTwo: 5
  },
  {
    name: "Pedro",
    noteOne: 8,
    noteTwo: 2
  },
  {
    name: "Felipe",
    noteOne: 9,
    noteTwo: 10
  },
];

const calcAverage = (valueOne, valueTwo) => {
  return (valueOne + valueTwo) / 2;

} 

const msgNote = (name, value) => {
  if(value>7){
    return `A média do(a) aluno(a) ${name} é: ${value} \nParabéns, ${name}! Você foi aprovado(a) no concurso!`;
  }else {
    return `A média do(a) aluno(a) ${name} é: ${value} \nNão foi desta vez, ${name}! Tente novamente!`;
  }
}


for(let student of students){
  let average = calcAverage(student.noteOne, student.noteTwo);
  let msg = msgNote(student.name, average);
  alert(msg);
}
