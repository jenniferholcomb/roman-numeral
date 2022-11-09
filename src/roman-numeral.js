export default function RomanNumerals() {
  this.symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  this.numbers = [];
}

RomanNumerals.prototype.convertNum = function(inputNum) {
 if(inputNum>3999) {
  return "please enter a number between 1 and 3999";
 }else {
  return "good number selection";
 }
};

RomanNumerals.prototype.checkNum = function(inputValue) {
  if (Number.isInteger(inputValue) === false) {
    return "please enter a number not a character";
  } else {
    return "thanks for entering a number";
  }
};

RomanNumerals.prototype.numArray = function(inputValue) {
  // const valueArray = inputValue.split('');

  const numsArr = Array.from(String(inputValue), Number);
  this.numbers = numsArr;
  return numsArr
}

RomanNumerals.prototype.lengthOf = function() {
  
  let romanNum = new RomanNumerals();
  let newArray = romanNum.numArray(8);
  console.log(newArray.length);
  romanNum.numArrayhis.numbers.length
  if(newArray.length === 1) {
    return true
  }else {
    return false
  }
}