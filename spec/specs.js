describe ("pigLatinTranslator", function () {
  it("should add 'ay' to the end of a word that starts with a vowel", function () {
    pigLatinTranslator("and").should.equal("anday");
  });
  it("should move the beginning consonant to the end then add 'ay' to the end of a word that starts with a consonant", function () {
    pigLatinTranslator("cindy").should.equal("indycay");
  });
  it("should move the beginning consonants to the end then add 'ay' to the end of a word that starts with more than 1 consonant", function () {
    pigLatinTranslator("stupid").should.equal("upidstay");
  });
  it("should move the beginning consonants to the end then add 'ay' to the end of a word that starts with more than 1 consonant", function () {
    pigLatinTranslator("strength").should.equal("engthstray");
  });
  it("should move the 'u' after a 'q' as if it were a consonant", function () {
    pigLatinTranslator("quick").should.equal("ickquay");
  });
  it("should move the 'u' after a 'q' as if it were a consonant, even if the word does not begin with 'q' ", function () {
    pigLatinTranslator("squeal").should.equal("ealsquay");
  });
  it("should treat a leading 'y' as a consonant", function () {
    pigLatinTranslator("you").should.equal("ouyay");
  });
  it("should translate all of the words in a sentence", function () {
    pigLatinTranslator("you are terribly strong and quick").should.equal("ouyay areay erriblytay ongstray anday ickquay");
  });
});
