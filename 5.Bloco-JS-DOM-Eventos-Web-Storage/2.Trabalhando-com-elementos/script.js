let ondeEstou = document.querySelector('#elementoOndeVoceEsta');
// console.log(ondeEstou);

let pai = document.querySelector('#elementoOndeVoceEsta').parentElement;
pai.style = 'red';
// console.log(pai);

let primeiroFilhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild.innerHTML = 'Este é onde eu estou, não faço parte da família!';
// console.log(primeiroFilhoDoFilho);

let primeiroFilhoPai = document.querySelector('#pai').firstElementChild;
// console.log(primeiroFilhoPai)

let primeiroFilhoElement = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
// console.log(primeiroFilhoElement);

let atencaoElement = document.querySelector('#elementoOndeVoceEsta').nextSibling;
// console.log(atencaoElement);

let terceiroElement = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
// console.log(terceiroElement);

let terceiroPai = document.querySelector('#pai').lastElementChild.previousElementSibling;
// console.log(terceiroPai);

let segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');
// console.log(segundoEUltimoFilhoDoFilho);

let quartoEUltimoFilho = document.querySelector("#quartoEUltimoFilho");
// console.log(quartoEUltimoFilho);

let quintoFilho = document.createElement('QuintoFilho');
// console.log(quintoFilho);

pai.appendChild(quintoFilho);
// console.log(quintoFilho);

let elementFilho = document.createElement('elementFilho');

ondeEstou.appendChild(elementFilho);
// console.log(elementFilho);

let paiDoPai = document.getElementById('paiDoPai');
pai.removeChild(terceiroPai, quartoEUltimoFilho, quintoFilho);

let stark = document.getElementById("stark_childs").lastElementChild.innerHTML;
console.log(stark);