let result = document.getElementById('result');

function dp(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calc() {
  result.value = eval(result.value);
}
