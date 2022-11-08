export default function Journal(input1, input2) {
  this.input1 = input1;
  this.input2 = input2;
}

Journal.prototype.numberOfCharacters = function() {
  const charCount = this.input2.length;
  console.log(charCount);
  return charCount;
};

Journal.prototype.vowels = function () {
  let vowelSearch = 0;
  const bodyString = this.input2;
  console.log(bodyString.charAt(4));
  for(let i = 0; i<= bodyString.length; i++){
    console.log("I'm here");
    if(bodyString.charAt(i) === 'a'){
      console.log("Found an i");
      vowelSearch++;
    } else if ( this.input2.charAt(i) ==='e') {
      vowelSearch++;
    } else if ( this.input2.charAt(i) ==='i'){
      vowelSearch++;
    } else if ( this.input2.charAt(i) ==='o') {
        vowelSearch++;
    } else if ( this.input2.charAt(i) ==='u') {
      vowelSearch++;
    }
  }
  console.log("We're out");
  return vowelSearch;
}

