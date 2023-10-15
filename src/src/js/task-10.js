const refs = {
  rootDiv: document.querySelector("#boxes"),
  input: document.querySelector("#controls").firstElementChild,
  btnCreate: document.querySelector("[data-create]"),
  btnClear: document.querySelector("[data-destroy]"),
};

refs.btnCreate.addEventListener("click", handlerCreate);
refs.btnClear.addEventListener("click", handlerClear);

function handlerCreate() {
  createBoxes(Number(refs.input.value));
}

function handlerClear() {
  destroyBoxes();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxSize = 30;

  const markup = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = boxSize + "px";
    div.style.height = boxSize + "px";
    div.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    markup.push(div);
  }
  refs.rootDiv.append(...markup);
  refs.input.value = "";
}

function destroyBoxes() {
  refs.rootDiv.innerHTML = "";
}
