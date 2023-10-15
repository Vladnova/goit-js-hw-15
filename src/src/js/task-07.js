const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', handlerChangeSizeText);
text.style.fontSize = input.value + 'px';

function handlerChangeSizeText(e) {
    text.style.fontSize = e.currentTarget.value + 'px';
};