import { Calculation } from "./Calculation.js";

function setDefaultSettings() {
  document.getElementById("inputGrade1-1").value = 1.3;
  document.getElementById("inputGrade1-2").value = 1.3;
  document.getElementById("inputGrade2-1").value = 1.3;
  document.getElementById("inputGrade2-2").value = 1.3;
  document.getElementById("inputVariant").value = 1;
  updateGrades();
}

function updateGrades() {
  // get input grades
  const grade1 = document.getElementById("inputGrade1-1").value;
  const grade2 = document.getElementById("inputGrade1-2").value;
  const grade3 = document.getElementById("inputGrade2-1").value;
  const grade4 = document.getElementById("inputGrade2-2").value;
  const variant = document.getElementById("inputVariant").value;

  // set input grades and calculate output grades
  calc.setInputGrades(grade1, grade2, grade3, grade4, variant);

  // set output grades
  document.getElementById("outputGrade1Short").innerText =
    calc.gradeWrittenThesis.valueShortAsString;
  document.getElementById("outputGrade1").innerText =
    calc.gradeWrittenThesis.valueAsString;
  document.getElementById("outputGrade2Short").innerText =
    calc.gradeDefense.valueShortAsString;
  document.getElementById("outputGrade2").innerText =
    calc.gradeDefense.valueAsString;
  document.getElementById("outputGrade3Short").innerText =
    calc.gradeThesis.valueShortAsString;
  document.getElementById("outputGrade3Text").innerText =
    '"' + calc.gradeThesisAsText + '"';

  // set calculation variant
  let result = "";
  if (calc.variant == 1)
    // variant 1
    result =
      '(2 × <span class="outputGrade1Short">' +
      calc.gradeWrittenThesis.valueShortAsString +
      '</span> + <span class="outputGrade2Short">' +
      calc.gradeDefense.valueShortAsString +
      "</span>) : 3 = " +
      calc.gradeThesis.valueAsString;
  else if (calc.variant == 2)
    // variant 2
    result =
      '(3 × <span class="outputGrade1Short">' +
      calc.gradeWrittenThesis.valueShortAsString +
      '</span> + <span class="outputGrade2Short">' +
      calc.gradeDefense.valueShortAsString +
      "</span>) : 4 = " +
      calc.gradeThesis.valueAsString;
  document.getElementById("outputGrade3Calc").innerHTML = result;
}

function init() {
  setDefaultSettings();
}

/* Add event listener (from module scope) */

// Input reset button/link
document
  .getElementById("resetInputs")
  .addEventListener("click", setDefaultSettings);

// Grade and variant selects
document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", updateGrades);
});

/* main */

let calc = new Calculation();
init();
