const romanNumeralsTable = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

const romanNumerals = Object.keys(romanNumeralsTable);
const sortedRomanNumerals = [...romanNumerals].sort(
  (a, b) => b.length - a.length
);

export const converterType = {
  roman: {
    title: "Roman Numeral Converter",
    label: "Arabic Number",
    name: "roman",
    type: "number"
  },
  arabic: {
    title: "Arabic Number Converter",
    label: "Roman Number",
    name: "arabic",
    type: "text"
  }
};

export function romanNumeralsConverter(arabicNumber) {
  return romanNumerals.reduce((result, romanNumeral) => {
    while (arabicNumber >= romanNumeralsTable[romanNumeral]) {
      result += romanNumeral;
      arabicNumber -= romanNumeralsTable[romanNumeral];
    }
    return result;
  }, "");
}

export function arabicNumberConverter(romanNumeral) {
  return sortedRomanNumerals.reduce((arabicNumber, romanCharacter) => {
    while (romanNumeral.includes(romanCharacter)) {
      arabicNumber += romanNumeralsTable[romanCharacter];
      romanNumeral = romanNumeral.replace(romanCharacter, "");
    }
    return arabicNumber;
  }, 0);
}
