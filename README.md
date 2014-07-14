pig-latin-translator
====================

README for Pig Latin Translator

* Author: Cindy Ward <cindyward@yahoo.com>
* Date created: July 13, 2014
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

Unresolved issues:
* The application does not deal with punctuation. If the user enters any punctuation,
  it will NOT be dealt with appropriately. This includes apostrophes in words like
  don't or isn't. I think the proper action would be to strip out all punctuation and put
  back only periods to mark the ends of sentences. (Does Pig Latin use apostrophes?)
* All letters are output in lower case. It might make sense to capitalize the first
  letter of the first word in a sentence.
* The original version does NOT use regular expressions. I might make a branch that
  uses them if I have time.
