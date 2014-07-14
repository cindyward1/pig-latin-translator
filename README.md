pig-latin-translator
====================

README for Pig Latin Translator

* Author: Cindy Ward <cindyward@yahoo.com>
* Date created: July 13, 2014
* Last modification date: July 14, 2014 (branch created to use regular expressions; also strips punctuation and adds period at the end)
* Created for:  Epicodus, Summer 2014 session

Included; written by author and/or pair (Justin Pacubas):
* ./README.md (this file)
* ./LICENSE.md (using the "Unlicense" template)
* ./index.html
* ./css/styles.css
* ./img/pig.jpg
* ./js/scripts.js
* ./spec/spec-runner.html
* ./spec/specs.js

Included; written by others but required for proper execution of application:
* ./css/bootstrap.js
* ./css/bootstrap.css
* ./js/jsquery-1.11.1.js
* ./spec/chai.js
* ./spec/mocha.js
* ./spec/mocha.css

Description:
This Web application asks the user to enter a sentence in English and converts their input to Pig Latin. The rules of Pig Latin were given as follows:
* For words that start with a vowel, add "ay" to the end. The following letters were
  designated as vowels: a, e, i, o, u, y (except as first letter of a word; see below).
* For words that start with one or more consonants, move all of the first consecutive
  consonants to the end and add "ay". If the first consonants include "qu", move the
  "u" along with the "q". Don't forget about words like "squeal" where the "qu"
  doesn't come first!
* For words that start with "y", treat the "y" as a consonant.

Assumptions:
* Mac said to assume that all sentence/clause punctuation and concomitant capital letters could be eliminated. Neither the assignment
  nor Wikipedia specified anything either way about this situation.
