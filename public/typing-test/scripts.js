$(document).ready(function() {
  
  var testStarted;
  var seconds;
  var currentIndex;

  function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function init(){
    testStarted = false;
    seconds = 60;

    var texts = [];
    textIndex = getRandomNum(0, 3);
    while (textIndex === currentIndex){
      textIndex = getRandomNum(0, 3);
    }
    currentIndex = textIndex;
    texts[0] = "<p>When Dorothy was left alone she began to feel hungry. So she went to the cupboard and cut herself some bread, which she spread with butter." +
    " She gave some to Toto, and taking a pail from the shelf she carried it down to the little brook and filled it with clear, sparkling water. " +
    "Toto ran over to the trees and began to bark at the birds sitting there. Dorothy went to get him, and saw such delicious fruit hanging from the branches that she gathered some of it," +
    "finding it just what she wanted to help out her breakfast. </p><p>Then she went back to the house, and having helped herself and Toto to a good drink of the cool, clear water," +
    "she set about making ready for the journey to the City of Emeralds.</p><p>Dorothy had only one other dress, but that happened to be clean and was hanging on a peg beside her bed." +
    " It was gingham, with checks of white and blue; and although the blue was somewhat faded with many washings, it was still a pretty frock. The girl washed herself carefully, " +
    "dressed herself in the clean gingham, and tied her pink sunbonnet on her head. She took a little basket and filled it with bread from the cupboard, laying a white cloth over the top. " +
    "Then she looked down at her feet and noticed how old and worn her shoes were.</p>";
    texts[1] = "<p>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, " +
    "but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?' </p>" +
    "<p>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble " +
    "of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</p><p>There was nothing so very remarkable in that; nor did Alice think it so very much out " +
    "of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time " +
    "it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind" +
    " that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in " +
    "time to see it pop down a large rabbit-hole under the hedge.</p>";
    texts[2] = "<p>Once upon a time there was a dear little girl who was loved by everyone who looked at her, but most of all by her grandmother, and there was nothing that she would not have given to the child. " +
    "Once she gave her a little cap of red velvet, which suited her so well that she would never wear anything else; so she was always called 'Little Red-Cap.'</p><p>One day her mother said to her: 'Come, Little " +
    "Red-Cap, here is a piece of cake and a bottle of wine; take them to your grandmother, she is ill and weak, and they will do her good. Set out before it gets hot, and when you are going, walk nicely and quietly " +
    "and do not run off the path, or you may fall and break the bottle, and then your grandmother will get nothing; and when you go into her room, don't forget to say, 'Good morning', and don't peep into every corner " +
    "before you do it.'</p><p>'I will take great care,' said Little Red-Cap to her mother, and gave her hand on it.</p><p>The grandmother lived out in the wood, half a league from the village, and just as Little Red-Cap " +
    "entered the wood, a wolf met her. Red-Cap did not know what a wicked creature he was, and was not at all afraid of him.</p><p>'Good day, Little Red-Cap,' said he.</p><p>'Thank you kindly, wolf.'</p>" +
    "<p>'Whither away so early, Little Red-Cap?'</p><p>'To my grandmother's.'</p>";
    texts[3] = "<p>There was once a poor widow who lived in a lonely cottage. In front of the cottage was a garden wherein stood two rose-trees, one of which bore white and the other red roses. She had two children who were " +
    "like the two rose-trees, and one was called Snow-white, and the other Rose-red. They were as good and happy, as busy and cheerful as ever two children in the world were, only Snow-white was more quiet and gentle than Rose-red. " +
    "Rose-red liked better to run about in the meadows and fields seeking flowers and catching butterflies; but Snow-white sat at home with her mother, and helped her with her housework, or read to her when there was nothing to do. " +
    "</p><p>The two children were so fond of one another that they always held each other by the hand when they went out together, and when Snow-white said: 'We will not leave each other,' Rose-red answered: 'Never so long as we live,' " +
    "and their mother would add: 'What one has she must share with the other.'</p><p>They often ran about the forest alone and gathered red berries, and no beasts did them any harm, but came close to them trustfully. The little hare would " +
    "eat a cabbage-leaf out of their hands, the roe grazed by their side, the stag leapt merrily by them, and the birds sat still upon the boughs, and sang whatever they knew.</p>";
    $('.text-container').html(texts[currentIndex]);

    $('#timer').html('01:00');
    $('#user-input').val("");
  }

  function countDown(){
    var timer = $('#timer');
    seconds--;
    seconds = addZero(seconds);
    timer.html("00:" + seconds);
    if (seconds >= 1){
      setTimeout(countDown, 1000);
    } else {
      timer.html("00:00");
      getResult();
    }
  }

  /* Format the time */
  function addZero(number){
    if (number < 10){
      number = "0" + number;
    }
    return number;
  }

  function getResult(){
    var totalWords = 0;
    var correctWords = 0;
    var mistakeAnswerPairs = {};
    var userInput = $('#user-input').val();
    var text = $('#text-passage').text();

    var userWordArray = splitWords(userInput);
    var textWordArray = splitWords(text);

    totalWords = userWordArray.length;

    /* Compare the user input with text */
    for (var i = 0; i < userWordArray.length; i++){
      if (userWordArray[i] === textWordArray[i]){
        correctWords++;
      } else {
        mistakeAnswerPairs[userWordArray[i]] = textWordArray[i];
      }
    }

    /* Show mistakes */
    function showMistakes(){
      var mistakeCount = 0;
      var mistakeContainer = $('#mistakes');
      for (var mistake in mistakeAnswerPairs){
        mistakeCount ++;
        answer = mistakeAnswerPairs[mistake];
        mistakeContainer.append("<p>" + mistake + ": " + answer + "</p>");
      }
      $('#mistakes-number').text(mistakeCount);
    }

    function showResults(){
      $('#totalResult').text("Total: " + totalWords + " wpm");
      $('#adjustedResult').text("Adjusted Total: " + correctWords + " wpm");
      showMistakes();

      $('.results-container').show();
    }

    showResults();
  }

  /* Remove punctation and split return words in an array */
  function splitWords(text){
    var array = text.replace(/[.,-;:!?()'"]/g, " ").split(" ");
    array = array.filter(function(word) { return word!== "";});
    return array;
  }

  function resetTest(){
    $('#totalResult').text('');
    $('#adjustedResult').text('');
    $('#mistakes').text('');
    init();
  }

  /* Start Test */
  $('#user-input').on('input', function(){
    if (!testStarted){
      testStarted = true;
      countDown();
    }
  });

  /* Reset Test */
  $('#reset-btn').click(function(){
    resetTest();
    $('.results-container').hide();
  });

  init();
});