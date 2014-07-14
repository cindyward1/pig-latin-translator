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
  var currentWord, restOfWord, firstLetter;
  var precedingQ = false;
  var leadingY = false;

  for (var index1 = 0; index1 < inputSentenceArray.length; index1++) {

    currentWord = inputSentenceArray[index1];
    firstLetter = currentWord.slice(0,1);
    
    if (firstLetter === "y") {
      leadingY = true;
    };

    while (!isAVowel(firstLetter) || (firstLetter === "u" && precedingQ) || leadingY) {
      leadingY = false;
      if (firstLetter === "q") {
        precedingQ = true;
      };
      restOfWord = currentWord.slice(1,currentWord.length) + firstLetter;
      firstLetter = restOfWord.slice(0,1);
      currentWord = restOfWord;
    };

    outputSentence = outputSentence + currentWord + "ay";

    if (index1 < inputSentenceArray.length - 1) { // not the last word
      outputSentence = outputSentence + " "; // put a space between words
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
