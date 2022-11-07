export default function Journal(title, entryBody) {
  this.title = title;
  this.entryBody = entryBody;
}

Journal.prototype.numberOfWords = function() {
  return "I can't answer that yet!";
};