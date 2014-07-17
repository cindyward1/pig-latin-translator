var isAVowel = function (inputLetter, isaY) {

  var vowelArray = ["a","e","i","o","u","y"];
  var returnValue = false;

  for (var index = 0; index < vowelArray.length; index++) {
    if (inputLetter === vowelArray[index]) {
      returnValue = true;
      break;
    };
  };

  return returnValue;

};

var pigLatinTranslator = function (inputSentence) {

  inputSentence = inputSentence.toLowerCase(); // strip off any capital letters
  var inputSentenceArray = inputSentence.split(" "); // split up the sentence into an array of words
  var outputSentence = "";
  var currentWord, resultMatch;
  var lettersToSlice = 1;

  for (var index1 = 0; index1 < inputSentenceArray.length; index1++) {

    currentWord = inputSentenceArray[index1].match(/[a-z]*/g).join(""); // let only letters pass through

    resultMatch = currentWord.match(/(^qu|[^aeiou]*qu|^y|[^aeiouy]*)([a-z]*)/); // matches any number of leading consonants or 'qu'

    if (resultMatch[1]) {
      currentWord = resultMatch[2] + resultMatch[1];
    };

    outputSentence = outputSentence + currentWord + "ay";

    if (index1 < inputSentenceArray.length - 1) { // not the last word
      outputSentence = outputSentence + " "; // put a space between words
    } else {
      outputSentence = outputSentence + "."; // put a period at the end of the sentence
    };

  };

  return outputSentence;

};

$(document).ready (function () {

  $("#show-results").hide();

  $("form#input-form").submit (function (event) {

    var inputSentence = $("textarea#input-sentence").val();
    var outputSentence = pigLatinTranslator(inputSentence);
    $("#show-results .output-sentence").text(outputSentence);
    $("#show-results").show();

    event.preventDefault();

  });
});
