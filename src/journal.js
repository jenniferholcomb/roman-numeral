export default function Journal(title, entryBody) {
  this.title = title;
  this.entryBody = entryBody;
}

Journal.prototype.numberOfCharacters = function() {
  const charCount = this.entryBody.length;
  console.log(charCount);
};