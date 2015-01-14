$(document).ready(function() {

  $("#user-text").bind('keyup', onKeyUp);
  $("#user-text").bind('blur', onKeyUp);

  function onKeyUp(){
    var words = $("#user-text").val().toLowerCase().trim().split(' ');
    countSyllables(words);
  }

  function countSyllables(text) {
    var totalSyllables = 0;
    var wordNumber = text.length;
    var line0 = "";
    var line1 = "";
    var line2 = "";
    var syllableCount = [0, 0, 0];

    for (i = 0; i < wordNumber; i++){
      var word = text[i];
      var syllables = countSyllablesForWord(word);
      totalSyllables = totalSyllables + syllables;
      
      if (totalSyllables <= 5){
        line0 = line0+ word + " ";
        syllableCount[0] = syllableCount[0] + syllables;
        $("#line-0").html(line0);
        $("#syllable-count-0").html(syllableCount[0]);
      } else if (totalSyllables <= 12){
        line1 = line1 + word + " ";
        syllableCount[1] = syllableCount[1] + syllables;
        $("#line-1").html(line1);
        $("#syllable-count-1").html(syllableCount[1]);
      } else if (totalSyllables <= 17){
        line2 = line2 + word + " ";
        syllableCount[2] = syllableCount[2] + syllables;
        $("#line-2").html(line2);
        $("#syllable-count-2").html(syllableCount[2]);
      }
    }
  }

  function countSyllablesForWord (aWord){
    if (aWord.length <= 3) {return 1;}
    aWord = aWord.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
    aWord = aWord.replace(/^y/, '');
    return aWord.match(/[aeiouy]{1,2}/g).length;
  }

});