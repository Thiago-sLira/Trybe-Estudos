let body = document.getElementsByTagName('body');

let elementH1 = document.createElement('h1');
elementH1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);
// exercicio 1;

let elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);
// exercicio 2;

let elementSection = document.createElement('section');
elementSection.className = 'center-content';
elementMain.appendChild(elementSection);
// exercicio 3;

let elementP = document.createElement('p');
elementP.innerHTML = 'Estou fazendo esses exercícios numa noite de sexta feira, cade o MUFASA?';
elementP.className = 'text.content';
elementSection.appendChild(elementP);
// exercicio 4;

let elementSectionLeft = document.createElement('section');
elementSectionLeft.className = 'left-content';
elementMain.appendChild(elementSectionLeft);
// exercicio 5;

let elementSectionRight = document.createElement('section');
elementSectionRight.className = 'right-content';
elementMain.appendChild(elementSectionRight);
// exercicio 6

let elementImg = document.createElement('img');
elementImg.className = 'small-image';
elementImg.src = 'https://picsum.photos/200';
elementSectionLeft.appendChild(elementImg);
// exercicio 7

let elementList = document.createElement('ul');
elementList.className = 'unorder-List';
elementSectionRight.appendChild(elementList);
const ul = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let num in ul) {
    let elementNumbers = document.createElement('li');
    elementNumbers.innerText = ul[num];
    elementList.appendChild(elementNumbers);
} // exercicio 8

for (i = 0; i < 3; i += 1) {
    let elementH3 = document.createElement('h3');
    elementH3.innerHTML = 'Que trampo isso aqui ' + i;
    elementMain.appendChild(elementH3);
} // exercicio 9


elementH1.className = 'title';
// exercicio 1

let elementH3 = document.getElementsByTagName('h3');
for (i = 0; i < 3; i +=1) {
    elementH3[i].className = 'description';
} // exercicio 2

let sectionLeftContent = document.getElementsByClassName('left-content')[0];
elementMain.removeChild(sectionLeftContent);
// exercicio 3

let sectionRightContent = document.getElementsByClassName('right-content')[0];
sectionRightContent.style.marginRight = 'auto';
// exercicio 4

let sectionCenter = document.getElementsByClassName('center-content')[0].parentElement;
sectionCenter.style.backgroundColor = 'green';
// exercicio 5

let ulli = document.getElementsByTagName('ul')[0];
ulli.lastChild.remove();
ulli.lastChild.remove();

// for (index = 0; index < ul.length; index +=1) {
//     let element = ul[index]
//     if (element.innerText.includes('nove', 'dez'))
//     ul.removeChild(element)
// }