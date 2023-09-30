/** @format */

let screen = document.querySelector(".screen");
let result = document.querySelector(".result");
let clear = document.querySelector(".clear");
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let btns = document.querySelectorAll(".btn");



// !--------------------------------------------------
let leftScreen = [];
let rightScreen = [];
let operatorClick = true;
let operator = "";
let emeliyatci = "";
btns.forEach((elements) => {
  elements.addEventListener("click", () => {
    if (operatorClick == true) {
      leftScreen.push(elements.value);
      console.log("leftScreen:", leftScreen);
      screen.innerHTML = leftScreen.join("");
    } else {
      rightScreen.push(elements.value);
      console.log("rightScreen:", rightScreen);
      screen.innerHTML = leftScreen.join("") + rightScreen.join("");
    }
  });
});

// ! PLUS FUNCTION ------------------------------------

const plusFunction = () => {
  if (leftScreen.length == 0) {
    alert("Reqem daxil edin zehmet olmasa");
  } else if (leftScreen.length !== 0) {
    if (operatorClick == true) {
      operatorClick = false;
      let plus = "+";
      operator = plus;
      leftScreen.push(plus);
      screen.innerHTML = leftScreen.join("");
    } else {
      alert("Siz artiq operator daxil etmisiniz");
    }
  }
};

plus.addEventListener("click", () => {
  plusFunction();
});

// ! MINUS FUNCTION ----------------------------------
const minusFunction = () => {
  if (leftScreen.length == 0) {
    alert("Reqem daxil edin zehmet olmasa");
  } else if (leftScreen.length !== 0) {
    if (operatorClick == true) {
      operatorClick = false;
      let plus = "-";
      operator = plus;
      leftScreen.push(plus);
      screen.innerHTML = leftScreen.join("");
    } else {
      alert("Siz artiq operator daxil etmisiniz");
    }
  }
};

minus.addEventListener("click", () => {
  minusFunction();
});

// ! MULTIPLY FUNCTION -------------------------------

const multiplyFunction = () => {
  if (leftScreen.length == 0) {
    alert("Reqem daxil edin zehmet olmasa");
  } else if (leftScreen.length !== 0) {
    if (operatorClick == true) {
      operatorClick = false;
      let plus = "x";
      operator = plus;
      leftScreen.push(plus);
      screen.innerHTML = leftScreen.join("");
    } else {
      alert("Siz artiq operator daxil etmisiniz");
    }
  }
};

multiply.addEventListener("click", () => {
  multiplyFunction();
});

// ! DIVIDE FUNCTION ---------------------------------
const divideFunction = () => {
  if (leftScreen.length == 0) {
    alert("Reqem daxil edin zehmet olmasa");
  } else if (leftScreen.length !== 0) {
    if (operatorClick == true) {
      operatorClick = false;
      let plus = "/";
      operator = plus;
      leftScreen.push(plus);
      screen.innerHTML = leftScreen.join("");
    } else {
      alert("Siz artiq operator daxil etmisiniz");
    }
  }
};

divide.addEventListener("click", () => {
  divideFunction();
});
// ! RESULT FUNCTION ---------------------------------

const resultFunction = () => {
  if (leftScreen.length == 0) {
    return alert("Reqem daxil edin zehmet olmasa");
  }
  let newLeftScreen = leftScreen.pop();
  emeliyatci = newLeftScreen;
  if (emeliyatci == operator) {
    if (operator == "+") {
      screen.innerHTML =
        Number(leftScreen.join("")) + Number(rightScreen.join(""));
    } else if (operator == "-") {
      screen.innerHTML =
        Number(leftScreen.join("")) - Number(rightScreen.join(""));
    } else if (operator == "x") {
      screen.innerHTML =
        Number(leftScreen.join("")) * Number(rightScreen.join(""));
    } else if (operator == "/") {
      screen.innerHTML =
        Number(leftScreen.join("")) / Number(rightScreen.join(""));
    }
  }
};

result.addEventListener("click", () => {
  resultFunction();
});

// ! CLEAR FUNCTION -----------------------------------

const clearFunction = () => {
  screen.innerHTML = 0;
  leftScreen = [];
  rightScreen = [];
  operatorClick = true;
  operator = "";
  emeliyatci = "";
};

clear.addEventListener("click", () => {
  clearFunction();
});


