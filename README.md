# journal

#### By Jennifer Holcomb & Vera 

#### This project creates a website to add journal entries, title and body.

## Technologies Used

* HTML
* CSS
* JAVASCRIPT
* webpack
* Node
* Bootstrap

## Description

This program allows a user to add a journal entry, title and body, then return the character length of the entry, as well as how many consonants and vowels.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of your directory.
* Open index.html
* ...

##Tests
Describe: Journal()
Test: "It should return a Journal object with two properties, title and body."
Code: const myJournal = new Journal(["My cat", "It's fluffy, and small."])
Expected Output: Journal { title: "My cat", body: "It's fluffy, and small."}

Describe: Journal.prototype.numberOfCharacters
Test: "It should count the number of characters in the body property of Journal Object."
Input: "It's fluffy, and small."
Code: const charCount = Journal.body.length
Expected Output: 23

Describe: Journal.prototype.vowels
Test: It should count the number of vowels in the body property of Journal Object."
Input: "It's fluffy, and small."
Code: let vowelCount = branching using charAt through string looking for and counting vowels
Expected Output: 4

## Known Bugs
* No known bugs.
* If any issues are discovered, please email jenniferlholcomb@gmail.com.

## License

MIT License

Copyright (c) 2022 Jennifer Holcomb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.