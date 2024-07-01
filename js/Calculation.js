import { Grade } from "./Grade.js";

export class Calculation {
  constructor() {
    this.gradeRating1 = new Grade(); // Note Gutachten 1
    this.gradeRating2 = new Grade(); // Note Gutachten 2
    this.gradePresentation = new Grade(); // Note Vortrag
    this.gradeDiscussion = new Grade(); // Note Diskussion
    this.variant = 1; // Berechnungsvariante

    this.gradeWrittenThesis = new Grade(); // Note Schriftliche Arbeit
    this.gradeDefense = new Grade(); // Note Verteidigung
    this.gradeThesis = new Grade(); // Note Abschlussarbeit
    this.gradeThesisAsText = "";
  }

  setInputGrades(grade1, grade2, grade3, grade4, variant = 1) {
    this.gradeRating1.value = Grade.floatToInt(parseFloat(grade1));
    this.gradeRating2.value = Grade.floatToInt(parseFloat(grade2));
    this.gradePresentation.value = Grade.floatToInt(parseFloat(grade3));
    this.gradeDiscussion.value = Grade.floatToInt(parseFloat(grade4));
    this.variant = variant;

    this.calc();
  }

  calc() {
    this.calcGradeWrittenThesis();
    this.calcGradeDefense();
    this.calcGradeThesis();
  }

  calcGradeWrittenThesis() {
    if (this.gradeRating1.value == 0 || this.gradeRating2.value == 0) {
      this.gradeWrittenThesis.value = 0;
    } else {
      if (
        this.gradeRating1.value > 4 * Grade.precisionFactor ||
        this.gradeRating2.value > 4 * Grade.precisionFactor
      ) {
        this.gradeWrittenThesis.value = 5 * Grade.precisionFactor;
      } else {
        const result = (this.gradeRating1.value + this.gradeRating2.value) / 2;
        this.gradeWrittenThesis.value = parseInt(result);
      }
    }
  }

  calcGradeDefense() {
    if (this.gradePresentation.value == 0 || this.gradeDiscussion.value == 0) {
      this.gradeDefense.value = 0;
    } else {
      const result =
        (this.gradePresentation.value + this.gradeDiscussion.value) / 2;
      this.gradeDefense.value =
        result > 4 * Grade.precisionFactor
          ? 5 * Grade.precisionFactor
          : parseInt(result);
    }
  }

  calcGradeThesis() {
    if (
      this.gradeWrittenThesis.valueShort == 0 ||
      this.gradeDefense.valueShort == 0
    ) {
      this.gradeThesis.value = 0;
    } else {
      if (
        this.gradeWrittenThesis.valueShort > 4 * Grade.precisionFactor ||
        this.gradeDefense.valueShort > 4 * Grade.precisionFactor
      ) {
        this.gradeThesis.value = 5 * Grade.precisionFactor;
      } else {
        let result = 0;
        if (this.variant == 1)
          // (2/3 + 1/3) / 3
          result =
            (2 * this.gradeWrittenThesis.valueShort +
              this.gradeDefense.valueShort) /
            3;
        else if (this.variant == 2)
          // (3/4 + 1/4) / 4
          result =
            (3 * this.gradeWrittenThesis.valueShort +
              this.gradeDefense.valueShort) /
            4;
        this.gradeThesis.value = parseInt(result);
      }
    }
    this.gradeThesisAsText = this.getGradeAsText(this.gradeThesis.value);
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
