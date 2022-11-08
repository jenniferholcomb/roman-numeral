import RomanNumerals from './../src/roman-numeral.js';

describe('RomanNumerals', () => {

  test('should correctly create a roman numerals object with symbols', () => {
    const romanNum = new RomanNumerals();
    expect(romanNum.symbols).toEqual(['I', 'V', 'X', 'L', 'C', 'D', 'M']);
  })

  // test('should create a property of numbers and set it equal to an empty array in the roman numerals object', () => {
  //   const romanNum = new RomanNumerals();
  //   expect(romanNum.numbers).toEqual([]);
  // })

  test('should return an error message if number is greater than 3999', () => {
    const romanNum = new RomanNumerals();
    expect(romanNum.convertNum(4000)).toEqual("please enter a number between 1 and 3999");
    expect(romanNum.convertNum(3000)).toEqual("good number selection");
  })

  test('should return an error message if input is not a number', () => {
    const romanNum = new RomanNumerals();
    expect(romanNum.checkNum("cat")).toEqual("please enter a number not a character");
    expect(romanNum.checkNum(3000)).toEqual("thanks for entering a number");
  })

})