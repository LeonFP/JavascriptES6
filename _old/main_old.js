/*class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}
class TodoList extends List {
  constructor() {
    super(); //Chama o construtor do pai
    this.usuario = "Leonardo";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function() {
  MinhaLista.add("Novo Todo");
};
MinhaLista.mostraUsuario();

class Matematica {
  static soma(x, y) {
    console.log(x + y);
  }
}
Matematica.soma(1, 2);
*/

/*
//Constante não pode ter seu valor reatribuído
const usuario = { nome: "Leonardo" };
usuario.nome = "Diego"; //Mutação da constante

function teste(x) {
  let y = 2; //Let = variavel de scopo só existe dentro do escopo atual.

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
*/

/*
//Manipulando arrays.
//https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/
//MAP
const arr = [1, 2, 3, 3, 5, 6, 7, 8];
//map percorre todos os itens do vetor
const array = arr.map(function(item, index) {
  return item + index;
});

//console.log(arr);
//console.log(array);

//REDUCE
//Soma todos os elementos do vetor
const sum = arr.reduce(function(total, next) {
  return total + next;
});
//console.log(sum);

//FILTER
//Filtra só os numeros pares do vetor
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
//console.log(filter);

//FIND
//Busca informação no array
const find = arr.find(function(item) {
  return item === 2;
});
//console.log(find);
*/

/*
// Arrow Functions
// Utilizar em casos onde são funções anonimas.
const arr = [1, 3, 4, 5, 6];
//Modo antigo sem arrow function
const newArr1 = arr.map(function(item) {
  return item * 2;
});
//Modo utilizando arrow function
const newArr2 = arr.map(item => item * 2);
console.log(newArr1);
console.log(newArr2);

// Não utilizar
var teste = () => "teste";
console.log(teste());

teste = () => ({ nome: "Diego" });
console.log(teste());
*/

/*
// Valores Padrão
function soma(a = 0, b = 0) {
  return a + b;
}

console.log(soma(1));
console.log(soma());
console.log(soma(1, 1));
*/

/*
//Desestruturação
const usuario = {
  nome: "Leonardo",
  idade: 24,
  endereco: {
    cidade: "São Paulo",
    uf: "SP"
  }
};

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraUsuario({ idade, endereco: { cidade, uf } }) {
  console.log(idade, cidade, uf);
}

mostraUsuario(usuario);
*/

/*
//Operadores rest/spread
//REST - resto das propriedades
console.log("REST");
const usuario = {
  nome: "Leonardo",
  idade: 24,
  espresa: "PWI"
};

const { nome, ...restoUsuario } = usuario;
console.log(nome);
console.log(restoUsuario);

const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6));

// SPREAD
console.log("SPREAD");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario1 = {
  nome: "Leonardo",
  idade: 24
};

const usuario2 = { ...usuario1, nome: "Gabriel" };
console.log(usuario1);
console.log(usuario2);
*/

/*
//Template Literals
const nome = "Leonardo";
const idade = 24;
console.log("Meu nome é: " + nome + " e tenho " + idade + " anos");
console.log(`Meu nome é: ${nome} e tenho ${idade} anos`);
*/

/*
//Object Short Syntax
const nome = "Leonardo";
const idade = 24;

//como as variaveis nome, e idade ja existe não é necessario especifica-las
const usuario = {
  nome,
  idade,
  empresa: "PWI"
};
console.log(usuario);
*/
