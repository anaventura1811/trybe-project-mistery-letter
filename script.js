function createLetter() {
  const newElement = document.createElement('span');
  const inputValue = document.getElementById('carta-texto');
  const cartaGerada = document.getElementById('carta-gerada');
  if (inputValue.value === '') {
    cartaGerada.textContent = 'Por favor, digite o conteúdo da carta';
  } else {
    cartaGerada.appendChild(newElement);
    newElement.textContent = inputValue.value;
  }
}

const btnAddLetter = document.getElementById('criar-carta');
btnAddLetter.addEventListener('click', createLetter);

// Testes
/* const objStyle = {
  newspaper: 'newspaper',
  magazineOne: 'magazine1',
  magazineTwo: 'magazine2',
};
const objSize = {
  medium: 'medium',
  big: 'big',
  reallybig: 'reallybig',
};
const objRotation = {
  rotateleft: 'rotateleft',
  rotateright: 'rotateright',
};
const objIncline = {
  skewleft: 'skewleft',
  skewright: 'skewright',
};

function randomnewStyle() {
  const randomStyle = Math.random(objStyle.value);
  return `${randomStyle}`;
}

function randomNewSize() {
  const randomSize = Math.random(objSize.value);
  return `${randomSize}`;
}
function randomnewIncline() {
  const randomIncline = Math.ceil(Math.random(objIncline.value));
  return toString(randomIncline);
}
// function randomNewRotation() {
// const randomRotation = Math.random(objRotation.value);
//  return `${randomRotation}`;
// }

function setNewStylesToLetter() {
  const span = document.getElementsByTagName('span');
  // span.classList.add(randomNewRotation());
  span.classList.add(randomNewSize());
  span.classList.add(randomnewIncline());
  span.classList.add(randomnewStyle());
}
console.log(setNewStylesToLetter());

btnAddLetter.addEventListener('click', setNewStylesToLetter); */
