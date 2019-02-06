/*class TodoList {
    constructor(){
      this.todos =[];
    }

    addTodo(){
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}



const MinhaLista = new TodoList();


document.getElementById('novotodo').onclick = function(){
    MinhaLista.addTodo();
}*/


/*class List {
  constructor() {
    this.todos = [];
  }

  add(data) {
    this.data.push('Novo Todo');
    console.log(this.data);
  }

}

class TodoList extends List {
  construtor() {
    super();

    this.usuario = 'Diego';
  }
}


const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add();
};
*/

/*const arr = [1,3,4,5,8,10];


const filter = arr.filter(function(item){
      return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
  return item == '0';
})

console.log(find);


const newArr = arr.map(function(item){
  return item * 2;
});

const newArr = arr.map(item => item * 2);

console.log(newArr);


const teste = () => [1,2,3]; */


// OPERADOR REST
/*const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocket',
    sobreNome: 'Nazario'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);


function soma(a,b, ...params){
    return params;
}

console.log(soma(1,3,4));*/

/*//SPREAD 

const arr1 = [1,2,3];

const arr1 = [4,5,6];

const arr3 =[...arr1, ...arr2];

console.log(arr3);*/


/*//TEMPLATE LITERALS
const nome = "Diego";
const idade = 23;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);*/

// OBJECT SHORT Syntax
/*const nome = "Diego";
const idade = 23;

const usuario = {
      nome,
      idade,
      empresa: "Rockt"
};

console.log(usuario);*/


import { soma } from './funcoes';

console.log(soma(1, 2));