function mens(mensagem) {
  console.log(mensagem);
}
/*
mens("Exercicio 01");

class Usuario {
  constructor(email, senha) {
    this.email, this.senha;
  }

  isAdmin() {
    return this.admin === true;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
mens(User1.isAdmin()); // false
mens(Adm1.isAdmin()); // true

mens("\nExercicio 02");
const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

mens("2.1 Map");
const idades = usuarios.map(item => item.idade);
mens(idades);

mens("2.2 Filter");
const usuariosRocketseat = usuarios.filter(
  item => item.empresa === "Rocketseat"
);
mens(usuariosRocketseat);

mens("2.3 Find");
const usuarioGoogle = usuarios.find(item => item.empresa === "Google");
mens(usuarioGoogle);

mens("2.4 Unindo operações");
// utilização do SPREAD
const unindo = usuarios
  .map(usuario => ({ ...usuario, idade: (usuario.idade *= 2) }))
  .filter(usuario => usuario.idade <= 50);
mens(unindo);

mens("\nExercicio 03");
mens("3.1");
const arr = [1, 2, 3, 4, 5];
mens(arr.map(item => item + 10));

mens("3.2");
const usuario = { nome: "Diego", idade: 23 };
const mostraIdade = usuario => usuario.idade;
mens(mostraIdade(usuario));

mens("3.3");
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "", idade = 0) => ({
  nome,
  idade
});
mens(mostraUsuario(nome, idade));
mens(mostraUsuario(nome));

mens("3.4");
const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve();
  });
};

const promise = () => new Promise((resolve, reject) => resolve());

mens("\nExercício 04");
mens("4.1");
const empresa = {
  nome: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  nome,
  endereco: { cidade, estado }
} = empresa;
mens(nome);
mens(cidade);
mens(estado);

mens("4.2");
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
mens(mostraInfo({ nome: "Diego", idade: 23 }));

mens("\nExercício 05");
mens("5.1");
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
mens(x);
mens(y);

mens("5.1 B");
function soma(...nums) {
  return nums.reduce((atual, proximo) => atual + proximo);
}
mens(soma(1, 2, 3, 4, 5, 6));
mens(soma(1, 2));

mens("5.2");
const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = {
  ...usuario,
  endereco: { ...usuario.endereco, cidade: "Lontras" }
};
mens(usuario2);
mens(usuario3);


mens("\nExercício 06");
const usuario = "Diego";
const idade = 23;
mens(`O usuário ${usuario} possui ${idade} anos`);

mens("\nExercício 07");
const nome = "Diego";
const idade = 23;
const usuario = {
  nome,
  idade,
  cidade: "Rio do Sul"
};
mens(usuario);
*/
