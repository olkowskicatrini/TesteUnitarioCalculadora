var input = document.querySelector("#display");
var operador = "";
var parar = false;

function limpar(){
  input.value = clear();
  document.querySelector("#history").innerHTML = clear();
  operador = clear();
};

function add_numero(string) {
  if (!parar){
    input.value = adicionarnumero(string, input.value, operador);
    document.querySelector("#history").innerHTML =  input.value;
  }
  else{
    parar = false;
    document.querySelector("#history").innerHTML = clear();
    operador = clear();
    input.value = string;
  }
};

function add_operador(op) {
   if (operador == ""){
    operador = op;
    input.value = adicionaroperador(op, input.value);
  } else {
    total()
    input.value = adicionaroperador(op, input.value);
    operador = op;
    parar=false;
  }
};

function total() {
  if (!parar) {
    /*O método split() divide uma String em uma lista ordenada de substrings, 
    coloca essas substrings em um array e retorna o array.
    A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
    No nosso caso, o parâmetro informado é o operador
    */
    numeros = input.value.split(operador);

    if (numeros[1] == "") {
      input.value = input.value + '0';
      numeros[1] = 0;
    }

    document.querySelector("#history").innerHTML = input.value;
    input.value = totalizar(numeros[0], numeros[1], operador)

    parar = true;
  }
};