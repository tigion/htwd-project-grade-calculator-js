
function setDefaultSettings() {
    document.getElementById('inputGrade1-1').value = 1.3;
    document.getElementById('inputGrade1-2').value = 1.3;
    document.getElementById('inputGrade2-1').value = 1.3;
    document.getElementById('inputGrade2-2').value = 1.3;
    document.getElementById('inputVariant').value = 1;
    updateGrades();
}

function updateGrades() {
    // get input grades
    const grade1 = document.getElementById('inputGrade1-1').value;
    const grade2 = document.getElementById('inputGrade1-2').value;
    const grade3 = document.getElementById('inputGrade2-1').value;
    const grade4 = document.getElementById('inputGrade2-2').value;
    const variant = document.getElementById('inputVariant').value;

    // set input grades and calculate output grades
    calc.setInputGrades(grade1, grade2, grade3, grade4, variant);

    // set output grades
    document.getElementById('outputGrade1Short').innerText = calc.gradeSchriftlicheArbeit.valueShortAsString;
    document.getElementById('outputGrade1').innerText = calc.gradeSchriftlicheArbeit.valueAsString;
    document.getElementById('outputGrade2Short').innerText = calc.gradeVerteidigung.valueShortAsString;
    document.getElementById('outputGrade2').innerText = calc.gradeVerteidigung.valueAsString;
    document.getElementById('outputGrade3Short').innerText = calc.gradeAbschlussarbeit.valueShortAsString;
    document.getElementById('outputGrade3Text').innerText = '"' + calc.gradeAbschlussarbeitAsText + '"';

    // set calculation variant
    let result = '';
    if (calc.variant == 1) // variant 1
        result = '(2 × <span class="outputGrade1Short">' + calc.gradeSchriftlicheArbeit.valueShortAsString + '</span> + <span class="outputGrade2Short">' + calc.gradeVerteidigung.valueShortAsString + '</span>) : 3 = ' + calc.gradeAbschlussarbeit.valueAsString;
    else if (calc.variant == 2) // variant 2
        result = '(3 × <span class="outputGrade1Short">' + calc.gradeSchriftlicheArbeit.valueShortAsString + '</span> + <span class="outputGrade2Short">' + calc.gradeVerteidigung.valueShortAsString + '</span>) : 4 = ' + calc.gradeAbschlussarbeit.valueAsString;
    document.getElementById('outputGrade3Calc').innerHTML = result;
}

function init() {
    setDefaultSettings();
    updateGrades();
}

/* main */

let calc = new Calculation();
init();
