"use strict";

var socialMedias = ['Facebook', 'Instagram', 'X', 'BlueSky'];
for (var i = 0; i < socialMedias.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(socialMedias[i]));
}

//apenas itera, não retorna nada
socialMedias.forEach(function (socialMediaName, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(socialMediaName));
});

//exemplo map 1
// consegue iterar no array e fazer modificações
var alunos = ['Gustavo', 'Julia', 'Paula', 'Vagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Front-End'
  };
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);
var indicePaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indicePaula);

//exemplo map 2
var numeros = [1, 2, 3, 4, 5];
var numerosDobrados = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(numerosDobrados);

// every
alunos2.push({
  nome: 'Lucio',
  curso: 'Back-End'
});
var todosFrontEnd = alunos2.every(function (item) {
  return item.curso === 'Front-End';
});
console.log(todosFrontEnd);

// some
var existeBackEnd = alunos2.some(function (item) {
  return item.curso === 'Back-End' && item.curso === 'Front-End';
});
console.log(existeBackEnd);
function filtraAlunosBackEnd(aluno) {
  return aluno.curso === 'Back-End';
}
var filtraAlunosBackEnd2 = function filtraAlunosBackEnd2(aluno) {
  return aluno.curso === 'Back-End';
};

//const alunosBackEnd = alunos2.filter(filtraAlunosBackEnd);

var alunosBackEnd = alunos2.filter(function (item) {
  return item.curso === 'Back-End';
});
console.log(alunosBackEnd);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomeAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomeAlunos);