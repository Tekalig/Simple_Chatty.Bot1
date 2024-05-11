let input = document.querySelector(".display");
let result = 0;
let valueHold = 0;
let oprator = "";
input.textContent = valueHold;

document.querySelectorAll(".button").forEach((bt) => {
  bt.addEventListener("click", () => {
    bt.classList.add("pressed");
    setTimeout(() => {
      bt.classList.remove("pressed");
    }, 100);
  });
});
  
document.querySelectorAll(".number").forEach((num) => {
  num.addEventListener("click", () => {
    if (valueHold === 0 || valueHold === result) {
      valueHold = "";
    }
    valueHold += num.textContent.trim();
    input.textContent = valueHold;
    valueHold = Number(valueHold);
  });
});

document.querySelectorAll(".oprator").forEach((op) => {
  op.addEventListener('click', () => {
    if (oprator) {
      result = eval(result + oprator + valueHold);
    }
    else {
      result = valueHold;
    }
    oprator = op.textContent.trim()[0];
    input.textContent = "";
    valueHold = 0;
  });
});

document.querySelector(".plus_minus").addEventListener('click', () => {
  if (valueHold !== 0) {
    valueHold *= -1;
    input.textContent = valueHold;
  }
});

document.querySelector(".percentage").addEventListener("click", () => {
  valueHold /= 100;
  input.textContent = valueHold;
});

document.querySelector(".dot").addEventListener("click", () => {
  if (!valueHold.toString().includes(".")) {
    valueHold += ".";
    input.textContent = valueHold;
  }
});

clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  input.textContent = 0;
  result = 0;
  valueHold = 0;
  oprator = '';
});

document.querySelector(".equal").addEventListener("click", () => {
  if (oprator) {
    result = eval(result + oprator + valueHold);
    input.textContent = result;
    oprator = "";
    valueHold = result;
  }
})