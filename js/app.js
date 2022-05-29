const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const deleteall = document.querySelector(".deleteall");
const deleteone = document.querySelector(".deleteone");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");

let num1 = 0;
let num2 = 0;
let operation = "";
let results = null;

//////delete all
deleteall.addEventListener("click", () => {
  current.innerText = "";
  previous.innerText = "";
  let results = null;
});
//////delete ones
deleteone.addEventListener("click", () => {
  current.innerText = current.innerText.slice(0, -1);
});

////calculation

numbers.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.textContent === "." && current.textContent.includes(".")) return;
    num2 = e.innerText;
    current.innerText += num2;

    num1 = current.innerText;

    console.log(num1);
  });
});

operator.forEach((e) => {
  e.addEventListener("click", () => {
    if (num1 && num2 && operation) {
      maths();
      previous.textContent = results;
    } else {
      results = parseFloat(num2);
    }
    /////////////
    operation = e.textContent;
    clear(operation);
    console.log(num2);

    console.log(results);
  });
});

const clear = function (name = "") {
  num2 = current.innerText + " " + name + " ";
  previous.innerText = num2;
  current.innerText = "";
  //   num2 = "";
};

result.addEventListener("click", () => {
  maths();
  //   clear();
  previous.innerText = results;
  num2 = results;

  num1 = "";
});
const maths = function () {
  if (operation === "+") {
    results = parseFloat(results) + parseFloat(num1);
  } else if (operation === "÷") {
    results = parseFloat(results) / parseFloat(num1);
  } else if (operation === "-") {
    results = parseFloat(results) - parseFloat(num1);
  } else if (operation === "*") {
    results = parseFloat(results) * parseFloat(num1);
  }
};
