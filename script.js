"use strict";

onload = document.getElementById("input-height-ft").focus();
const calcBMI = function (height, weight) {
  return 703 * (weight / height ** 2);
};

document.querySelector(".calculate").addEventListener("click", function () {
  const heightFeet = Number(document.getElementById("input-height-ft").value);
  const heightInches = Number(document.getElementById("input-height-in").value);
  const weight = Number(document.getElementById("input-weight").value);
  const height = heightFeet * 12 + heightInches;

  const BMI = Math.round(calcBMI(height, weight) * 10) / 10;

  document.getElementById("result").textContent = BMI;
});

document.querySelector(".clear").addEventListener("click", function () {
  document.getElementById("input-height-ft").value = "";
  document.getElementById("input-height-in").value = "";
  document.getElementById("input-weight").value = "";
  document.getElementById("result").textContent = "BMI";
});
