class Grade {
  static precisionDigits = 3;
  static precisionFactor = Math.pow(10, Grade.precisionDigits);
  static decimalSeparator = ",";

  constructor(value = 0) {
    this.value = value;
  }

  get value() {
    return this._value;
  }
  set value(value) {
    value = parseInt(value);
    this._value =
      value >= 1 * Grade.precisionFactor && value <= 5 * Grade.precisionFactor
        ? value
        : 0;
  }

  get valueShort() {
    return (
      parseInt(this.value / (Grade.precisionFactor / 10)) *
      (Grade.precisionFactor / 10)
    );
  }
  get valueAsString() {
    return this.convertToString(this.value, false);
  }
  get valueShortAsString() {
    return this.convertToString(this.value);
  }

  convertToString(value, isShort = true) {
    const sValue =
      value > 0 ? value.toString() : "0".repeat(Grade.precisionDigits + 1);
    const integerPart = sValue[0];
    const fractionalPart = isShort ? sValue[1] : sValue.slice(1);
    return integerPart + Grade.decimalSeparator + fractionalPart;
  }

  static floatToInt(value) {
    return parseInt(value * Grade.precisionFactor);
  }
}
