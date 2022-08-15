const numberButtons = document.querySelector("[data-number]");
const operatorButtons = document.querySelector("[data-operator]");
const equalsButtons = document.querySelector("[data-equals]");
const dataallcleartudoButtons = document.querySelector("[data-all-clear]");
const deleteButtons = document.querySelector("[data-delete]");
const operacaoanteriorTextElement = document.querySelector(
  "[operacao-dados-anterior]"
);
const operacaoatualTextElement = document.querySelector(
  "[operacao-dados-atual]"
);

// class Calcular {
//   constructor(operacaoanteriorTextElement, operacaoatualTextElement) {
//     this.operacaoanteriorTextElement = operacaoanteriorTextElement;
//     this.operacaoatualTextElement = operacaoatualTextElement;
//     this.limpar;
//   }

//   anxarnumero(numero) {
//     this.operacaoatual = "${this.operacaoatual}${numero.toString()}";
//   }

//   limpar() {
//     this.operacaoatual = "";
//     this.operacaoanterior = "";
//     this.operacao = undefined;
//   }

//   atualizarteula() {
//     this.operacaoanteriorTextElement.innerText = this.operacaoanterior;
//     this.operacaoatualTextElement.innerText = this.operacaoatual;
//   }
// }

// const calcular = new Calcular(
//   operacaoanteriorTextElement,
//   operacaoatualTextElement
// );

// for (const numeroButtons of numeroButtons) {
//   numeroButtons.addEventListener("click", () => {
//     calcular.anxarnumero(numeroButtons.innerText);
//     calcular.atualizarteula();
//   });
// }

// limpartudoButtons.addEventListener("click", () => {
//   Calcular.limpar();
//   Calcular.atualizartela();
// });
