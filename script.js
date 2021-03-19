// Estilo aleatório
function randomizeStyles() {
  const arrStyles = ['newspaper', 'magazine1', 'magazine2'];
  const randomStyles = Math.floor(Math.random() * arrStyles.length);
  return randomStyles;
}
function addStyle() {
  const arrStyles = ['newspaper', 'magazine1', 'magazine2'];
  const newStyle = arrStyles[randomizeStyles()];
  return newStyle;
}
console.log(addStyle());

// Inclinação aleatória
function randomizeIncline() {
  const arrIncline = ['skewleft', 'skewright'];
  const randomIncline = Math.floor(Math.random() * arrIncline.length);
  return randomIncline;
}
function addIncline() {
  const arrIncline = ['skewleft', 'skewright'];
  const newIncline = arrIncline[randomizeIncline()];
  return newIncline;
}

// Rotação aleatória
function randomizeRotation() {
  const arrRotate = ['rotateleft', 'rotateright'];
  const randomRotation = Math.floor(Math.random() * arrRotate.length);
  return randomRotation;
}
function addRotation() {
  const arrRotate = ['rotateleft', 'rotateright'];
  const newRotation = arrRotate[randomizeRotation()];
  return newRotation;
}

// Tamanho aleatório
function randomizeSizes() {
  const arrSizes = ['medium', 'big', 'reallybig'];
  const randomSizes = Math.floor(Math.random() * arrSizes.length);
  return randomSizes;
}
function addSize() {
  const arrSizes = ['medium', 'big', 'reallybig'];
  const newSize = arrSizes[randomizeSizes()];
  return newSize;
}

function createLetter() {
  const newElement = document.createElement('span');
  const inputValue = document.getElementById('carta-texto');
  const cartaGerada = document.getElementById('carta-gerada');
  if (inputValue.value === '' || inputValue.value === ' ') {
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    cartaGerada.appendChild(newElement);
    newElement.textContent = inputValue.value;
    newElement.classList.add(`${addStyle()}`);
    newElement.classList.add(`${addIncline()}`);
    newElement.classList.add(`${addRotation()}`);
    newElement.classList.add(`${addSize()}`);
  }
}

const btnAddLetter = document.getElementById('criar-carta');
btnAddLetter.addEventListener('click', createLetter);
