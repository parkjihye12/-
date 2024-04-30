let result = 0;
let operator = "";

const resultEl = document.querySelector(".result");

resultEl.innerHTML = result;

function onClickNumber(number) {
  if (resultEl.innerHTML.length >= 13) return;

  if (resultEl.innerHTML === "0") {
    resultEl.innerHTML = number;
  } else {
    resultEl.innerHTML += number;
  }
}

function onClickOperator(inputOperator) {
  result = +resultEl.innerHTML;

  resultEl.innerHTML = 0;

  operator = inputOperator;

  console.log(operator);
}
