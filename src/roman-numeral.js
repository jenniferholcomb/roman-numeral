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
  for(let i = 0; i<= bodyString.length; i++){
    if(bodyString.charAt(i) === 'a'){
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
  return vowelSearch;
};

// since myJ.vowels return vowelSearch=#, subtrct that from charCount
// .trim() whitespaces && if [i]!==Symbol
Journal.prototype.consonants = function(){
  const body = this.input2;
  let bodyString = body.trim(" ");
  let consonantSearch = 0;
  console.log("body: ", body);
  console.log("bodyString: ", bodyString);

  for( let i = 0; i<= bodyString.length; i++){
    if(bodyString.charAt(i)  ){ //!== Symbol
      console.log("body in not a symbol: ");
      if(bodyString.charAt(i) !== 'a'){
        consonantSearch++;
      } else if ( this.input2.charAt(i) !=='e') {
        consonantSearch++;
      } else if ( this.input2.charAt(i) !=='i'){
        consonantSearch++;
      } else if ( this.input2.charAt(i) !=='o') {
        consonantSearch++;
      } else if ( this.input2.charAt(i) !=='u') {
        consonantSearch++;
      }
    }
  }
  return consonantSearch;
};