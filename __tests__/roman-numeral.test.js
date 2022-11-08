import RomanNumerals from './../src/roman-numeral.js';

describe('RomanNumerals', () => {

  test('should correctly create a roman numerals object with symbols', () => {
    const romanNum = new RomanNumerals();
    expect(romanNum.symbols).toEqual(['I', 'V', 'X', 'L', 'C', 'D', 'M'])
  })

  test('should return an error message if number is greater than 3999', () => {
    const romanNum = new RomanNumerals();
    expect(romanNum.convertNum(4000)).toEqual("please enter a number between 1 and 3999");
    expect(romanNum.convertNum(3000)).toEqual("good number selection");
  })

})