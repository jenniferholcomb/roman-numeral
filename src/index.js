import Journal from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleJournalForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const input1 = document.querySelector('#input1').value;
  const input2 = document.querySelector('#input2').value;
  const journal = new Journal(input1, input2);
  const numChar = journal.numberOfCharacters();
  console.log("numChar: ", numChar);
  const numVowels = journal.vowels();
  console.log("numVowels: ", numVowels);
  //const pTag = document.createElement("p");
  //pTag.append(response);
  //document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#journal-checker-form").addEventListener("submit", handleJournalForm);
});