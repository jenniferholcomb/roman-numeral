export default function Journal(title, entryBody) {
  this.title = title;
  this.entryBody = entryBody;
}

Journal.prototype.numberOfCharacters = function() {
  const charCount = this.entryBody.length;
  console.log(charCount);
  return charCount;
};

Journal.prototype.vowels = function (charCount) {
  const vowelSearch = 0;
  console.log(vowelSearch);
  for(let i = 0; i<= charCount; i++){
    if(this.entryBody.charAt(i) === 'a'){
      vowelSearch++;
    } else if ( this.entryBody.charAt(i) ==='e') {
      vowelSearch++;
    } else if ( this.entryBody.charAt(i) ==='i'){
      vowelSearch++;
    } else if ( this.entryBody.charAt(i) ==='o') {
        vowelSearch++;
    } else if ( this.entryBody.charAt(i) ==='u') {
      vowelSearch++;
    }
    console.log(vowelSearch);
    return vowelSearch;
  }
}

