import { Grade } from "./Grade.js";

export class Calculation {
  constructor() {
    this.gradeGutachten1 = new Grade();
    this.gradeGutachten2 = new Grade();
    this.gradeVortrag = new Grade();
    this.gradeDiskussion = new Grade();
    this.variant = 1;

    this.gradeSchriftlicheArbeit = new Grade();
    this.gradeVerteidigung = new Grade();
    this.gradeAbschlussarbeit = new Grade();
    this.gradeAbschlussarbeitAsText = "";
  }

  setInputGrades(grade1, grade2, grade3, grade4, variant = 1) {
    this.gradeGutachten1.value = Grade.floatToInt(parseFloat(grade1));
    this.gradeGutachten2.value = Grade.floatToInt(parseFloat(grade2));
    this.gradeVortrag.value = Grade.floatToInt(parseFloat(grade3));
    this.gradeDiskussion.value = Grade.floatToInt(parseFloat(grade4));
    this.variant = variant;

    this.calc();
  }

  calc() {
    this.calcGradeSchriftlicheArbeit();
    this.calcGradeVerteidigung();
    this.calcGradeAbschlussarbeit();
  }

  calcGradeSchriftlicheArbeit() {
    if (this.gradeGutachten1.value == 0 || this.gradeGutachten2.value == 0) {
      this.gradeSchriftlicheArbeit.value = 0;
    } else {
      if (
        this.gradeGutachten1.value > 4 * Grade.precisionFactor ||
        this.gradeGutachten2.value > 4 * Grade.precisionFactor
      ) {
        this.gradeSchriftlicheArbeit.value = 5 * Grade.precisionFactor;
      } else {
        const result =
          (this.gradeGutachten1.value + this.gradeGutachten2.value) / 2;
        this.gradeSchriftlicheArbeit.value = parseInt(result);
      }
    }
  }

  calcGradeVerteidigung() {
    if (this.gradeVortrag.value == 0 || this.gradeDiskussion.value == 0) {
      this.gradeVerteidigung.value = 0;
    } else {
      const result = (this.gradeVortrag.value + this.gradeDiskussion.value) / 2;
      this.gradeVerteidigung.value =
        result > 4 * Grade.precisionFactor
          ? 5 * Grade.precisionFactor
          : parseInt(result);
    }
  }

  calcGradeAbschlussarbeit() {
    if (
      this.gradeSchriftlicheArbeit.valueShort == 0 ||
      this.gradeVerteidigung.valueShort == 0
    ) {
      this.gradeAbschlussarbeit.value = 0;
    } else {
      if (
        this.gradeSchriftlicheArbeit.valueShort > 4 * Grade.precisionFactor ||
        this.gradeVerteidigung.valueShort > 4 * Grade.precisionFactor
      ) {
        this.gradeAbschlussarbeit.value = 5 * Grade.precisionFactor;
      } else {
        let result = 0;
        if (this.variant == 1)
          // (2/3 + 1/3) / 3
          result =
            (2 * this.gradeSchriftlicheArbeit.valueShort +
              this.gradeVerteidigung.valueShort) /
            3;
        else if (this.variant == 2)
          // (3/4 + 1/4) / 4
          result =
            (3 * this.gradeSchriftlicheArbeit.valueShort +
              this.gradeVerteidigung.valueShort) /
            4;
        this.gradeAbschlussarbeit.value = parseInt(result);
      }
    }
    this.gradeAbschlussarbeitAsText = this.getGradeAsText(
      this.gradeAbschlussarbeit.value,
    );
  }

  getGradeAsText(grade) {
    if (grade < 1 * Grade.precisionFactor) return " - ";
    else if (grade <= 1.5 * Grade.precisionFactor) return "Sehr gut";
    else if (grade <= 2.5 * Grade.precisionFactor) return "Gut";
    else if (grade <= 3.5 * Grade.precisionFactor) return "Befriedigend";
    else if (grade <= 4 * Grade.precisionFactor) return "Ausreichend";
    else return "Nicht ausreichend";
  }
}
