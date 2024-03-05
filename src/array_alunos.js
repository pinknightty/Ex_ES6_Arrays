const alunos = [
   { nome: 'Julia', nota: 8 },
   { nome: 'Paula', nota: 2 },
   { nome: 'Vagner', nota: 9 },
   { nome: 'José', nota: 6 },
   { nome: 'Polly', nota: 3 }
];

const alunosTest = alunos.filter(function(item) {
   return item.nota >= 6;
})
console.log("Os alunos foram aprovados:")
console.log(alunosTest);