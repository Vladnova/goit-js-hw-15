function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  textColor: document.querySelector('.color')
}


refs.changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.textColor.innerText = getRandomHexColor();
}