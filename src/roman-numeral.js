export default function RomanNumerals() {
  this.symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
}

RomanNumerals.prototype.convertNum = function(inputNum) {
 if(inputNum>3999) {
  console.log(inputNum);
  return "please enter a number between 1 and 3999"
 }else {
  return "good number selection"
 }
};
