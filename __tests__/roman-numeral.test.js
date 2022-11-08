import RomanNumerals from './../src/roman-numeral.js';

describe('RomanNumerals', () => {

  test('should correctly create a roman numerals object with symbols', () => {
    const romanNum = new RomanNumerals();
    expect(romanNum.symbols).toEqual(['I', 'V', 'X', 'L', 'C', 'D', 'M'])
  })
})